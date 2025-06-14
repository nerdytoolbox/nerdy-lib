import { MigrationType } from "./migrations";

export const validateMigrations = (migrations) => {
	const errorMessages = []

	if (!Array.isArray(migrations)) {
		throw new Error('migrations must be an array');
	}

	let iMigration = 0;
	for (const migration of migrations) {
		iMigration++;

		if (typeof migration !== 'object') {
			errorMessages.push(`Migration ${iMigration} must be an object`);
			continue;
		}
		if (migration.fromVersion == null || typeof migration.fromVersion !== 'number' || migration.fromVersion !== iMigration) {
			errorMessages.push(`Migration ${iMigration}: fromVersion must be a number equal to ${iMigration}`);
		}
		if (migration.toVersion == null || typeof migration.toVersion !== 'number' || migration.toVersion !== iMigration+1) {
			errorMessages.push(`Migration ${iMigration}: toVersion must be a number equal to ${iMigration+1}`);
		}
		if (!Array.isArray(migration.steps)) {
			errorMessages.push(`Migration ${iMigration}: steps must be an array`);
			continue;
		}

		let iStep = 0;
		for (const step of migration.steps) {
			iStep++;

			if (typeof step !== 'object') {
				errorMessages.push(`Migration ${iMigration}, Step ${iStep} must be an object`);
				continue;
			}
			if (typeof step.type !== 'string') {
				errorMessages.push(`Migration ${iMigration}, Step ${iStep}: type must be a string`);
			}
			if (step.type === MigrationType.ADD) {
				if (step.key == null || typeof step.key !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: ADD migration requires a valid key`);
				}
				if (step.value == null) {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: ADD migration requires a valid value`);
				}
			} else if (step.type === MigrationType.COPY) {
				if (step.fromKey == null || typeof step.fromKey !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: COPY migration requires a valid fromKey`);
				}
				if (step.toKey == null || typeof step.toKey !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: COPY migration requires a valid toKey`);
				}
			} else if (step.type === MigrationType.TRANSFORM) {
				if (step.key == null || typeof step.key !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: TRANSFORM migration requires a valid key`);
				}
				if (step.transformFnc == null || typeof step.transformFnc !== 'function') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: TRANSFORM migration requires a valid transformFnc`);
				}
			} else if (step.type === MigrationType.MERGE) {
				if (step.toKey == null || typeof step.toKey !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: MERGE migration requires a valid toKey`);
				}
				if (step.fromKey == null || typeof step.fromKey !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: MERGE migration requires a valid fromKey`);
				}
				if (step.mergeFnc == null || typeof step.mergeFnc !== 'function') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: MERGE migration requires a valid mergeFnc`);
				}
			} else if (step.type === MigrationType.REMOVE) {
				if (step.key == null || typeof step.key !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: REMOVE migration requires a valid key`);
				}
			} else if (step.type === MigrationType.RENAME) {
				if (step.fromKey == null || typeof step.fromKey !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: RENAME migration requires a valid fromKey`);
				}
				if (step.toKey == null || typeof step.toKey !== 'string') {
					errorMessages.push(`Migration ${iMigration}, Step ${iStep}: RENAME migration requires a valid toKey`);
				}
			} else {
				errorMessages.push(`Migration ${iMigration}, Step ${iStep}: Unknown migration type "${step.type}"`);
			}
		}
	}

	if (errorMessages.length > 0) {
		throw new Error(`There are errors in the migrations object: ${errorMessages.join(', ')}`);
	}
}

export const validateUpdateBatch = (updateBatch) => {
	if (!Array.isArray(updateBatch)) {
		throw new Error("updateBatch must be an array");
	}
	for (const update of updateBatch) {
		if (typeof update !== 'object') {
			throw new Error("Each update in updateBatch must be an object");
		}
		if (!("path" in update) || typeof update.path !== 'string' || update.path.startsWith(".") || update.path.endsWith(".")) {
			throw new Error("Each update in updateBatch must have a valid path");
		}
		if (!("value" in update)) {
			throw new Error("Each update in updateBatch must have a value");
		}
	}
}
import { getNestedValue, removeNestedValue, setNestedValue } from "./nestedObjects";
import { validateMigrations } from "./validateMigrations";

export const MigrationType = {
	// Basic actions that can be performed on the storage
	ADD: 'ADD', // Add a new key with default value
	COPY: 'COPY', // Copy an existing key to a new key
	TRANSFORM: 'TRANSFORM', // Transform an existing key's value, using a function
	MERGE: 'MERGE', // Merge an existing key's value with a new value, using a function
	REMOVE: 'REMOVE', // Remove a key
	RENAME: 'RENAME', // Rename the key, can be nested
}

/*
* Migration object that defines how to migrate data from one version to another
* keys can be nested, e.g. "key1.key2.key3"
* This is an example migration object that can be used to migrate data
*/
export const migrationsObjectExample = [
	{
		// The version of the migration
		fromVersion: 1,
		toVersion: 2,

		// Steps to perform the migration
		steps: [
			{
				type: MigrationType.ADD,
				key: "newKey",
				value: "defaultValue"
			},
			{
				type: MigrationType.COPY,
				fromKey: "existingKey",
				toKey: "newKey"
			},
			{
				type: MigrationType.TRANSFORM,
				key: "existingKey",
				transformFnc: (value) => value + 1
			},
			{
				type: MigrationType.MERGE,
				toKey: "keyToMergeInto",
				fromKey: "keyToMergeFrom",
				mergeFnc: (toValue, fromValue) => ({ ...toValue, ...fromValue })
			},
			{
				type: MigrationType.REMOVE,
				key: "keyToRemove"
			},
			{
				type: MigrationType.RENAME,
				fromKey: "oldName",
				toKey: "newName"
			}
		]
	},
	// There can be multiple migrations, each with its own fromVersion and toVersion
	// It is important that the migrations are ordered by version, from lowest to highest
]

/*
*
*/
export const migrateData = async (data, migrations) => {
	if (data.version == null || data.version === 0) {
		// From version 0, the only migration needed is to set the version to 1
		data.version = 1;
	}

	for (const migration of migrations) {
		if (data.version < migration.fromVersion) {
			throw new Error(`Data version ${data.version} is lower than lowest migration fromVersion ${migration.fromVersion}`);
		}
		if (data.version !== migration.fromVersion) {
			continue; // No migration needed
		}
		data.version = migration.toVersion;

		for (const step of migration.steps) {
			switch (step.type) {
				case MigrationType.ADD:
					if (step.key == null || typeof step.key !== 'string') {
						throw new Error("Invalid key for ADD migration");
					}
					if (step.value == null) {
						throw new Error("Invalid value for ADD migration");
					}

					setNestedValue(data, step.key, step.value)
					break;
				case MigrationType.COPY:
					if (step.fromKey == null || typeof step.fromKey !== 'string') {
						throw new Error("Invalid fromKey for COPY migration");
					}
					if (step.toKey == null || typeof step.toKey !== 'string') {
						throw new Error("Invalid toKey for COPY migration");
					}

					const sourceValue = getNestedValue(data, step.fromKey);
					setNestedValue(data, step.toKey, sourceValue)
					break;
				case MigrationType.TRANSFORM:
					if (step.key == null || typeof step.key !== 'string') {
						throw new Error("Invalid key for TRANSFORM migration");
					}
					if (step.transformFnc == null || typeof step.transformFnc !== 'function') {
						throw new Error("Invalid transformFnc for TRANSFORM migration");
					}

					data[step.key] = step.transformFnc(data[step.key]);
					break;
				case MigrationType.MERGE:
					if (step.toKey == null || typeof step.toKey !== 'string') {
						throw new Error("Invalid toKey for MERGE migration")
					}
					if (step.fromKey == null || typeof step.fromKey !== 'string') {
						throw new Error("Invalid fromKey for MERGE migration")
					}
					if (step.mergeFnc == null || typeof step.mergeFnc !== 'function') {
						throw new Error("Invalid mergeFnc for MERGE migration")
					}

					data[step.toKey] = step.mergeFnc(data[step.toKey], data[step.fromKey])
					break;
				case MigrationType.REMOVE:
					if (step.key == null || typeof step.key !== 'string') {
						throw new Error("Invalid key for REMOVE migration");
					}

					removeNestedValue(data, step.key)
					break;
				case MigrationType.RENAME:
					if (step.fromKey == null || typeof step.fromKey !== 'string') {
						throw new Error("Invalid fromKey for RENAME migration");
					}
					if (step.toKey == null || typeof step.toKey !== 'string') {
						throw new Error("Invalid toKey for RENAME migration");
					}

					const valueToRename = getNestedValue(data, step.fromKey)
					setNestedValue(data, step.toKey, valueToRename)
					removeNestedValue(data, step.fromKey)
					break;
				default:
					throw new Error(`Unknown migration type: ${step.type}`);
			}
		}
	}

	return data
}
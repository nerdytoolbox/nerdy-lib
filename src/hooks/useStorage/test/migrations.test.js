import { migrateData, migrationsObjectExample, MigrationType } from "../migrations";
import { validateMigrations, validations } from "../validations";

test('validate migrations', async () => {
	await expect(async () => validateMigrations(migrationsObjectExample)).not.toThrow();
})

test('adds version 1 to data if version is missing', () => {
	const data = { key1: 'value1' }; // Initial data without version
	const migrations = [] // Migration object

	// Test
	migrateData(data, migrations)
	expect(data).toEqual({ version: 1, key1: 'value1' });
})

test('version of data is lower than lowest fromVersion in migrations object', async () => {
	const data = { version: 1, key1: 'value1' }; // Initial data without version
	// Migration object
	const migrations = [
		{
			fromVersion: 3,
			toVersion: 4,
			steps: []
		}
	]

	// Test
	await expect(async () => migrateData(data, migrations)).rejects.toThrow("Data version 1 is lower than lowest migration fromVersion 3")
})

test('unknown migration type', async () => {
	const data = { version: 1, key1: 'value1' }; // Initial data without version
	// Migration object
	const migrations = [
		{
			fromVersion: 1,
			toVersion: 2,
			steps: [
				{
					type: "Unknown",
					key: 'key1',
					value: 'value1'
				}
			]
		}
	]

	// Test
	await expect(async () => migrateData(data, migrations)).rejects.toThrow("Unknown migration type: Unknown")
})

describe('ADD migration', () => {
	test('fails with invalid key', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.ADD,
						key: 3,
						value: 'value3'
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid key for ADD migration")
	})

	test('fails with invalid value', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.ADD,
						key: 'key2',
						value: undefined,
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid value for ADD migration")
	})

	test('succeeds with valid migration object', () => {
		const data = { version: 1, key1: 'value1' }; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.ADD,
						key: 'key2',
						value: 'value2'
					}
				]
			}
		]

		// Test
		migrateData(data, migrations)
		expect(data).toEqual({ version: 2, key1: 'value1', key2: 'value2' });
	})
})

describe('COPY migration', () => {
	test('fails with invalid fromKey', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.COPY,
						fromKey: 3,
						toKey: 'key2'
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid fromKey for COPY migration")
	})

	test('fails with invalid toKey', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.COPY,
						fromKey: 'key1',
						toKey: 3
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid toKey for COPY migration")
	})

	test('succeeds with valid migration object', () => {
		const data = { version: 1, key1: 'value1' }; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.COPY,
						fromKey: 'key1',
						toKey: 'key2'
					}
				]
			}
		]

		// Test
		migrateData(data, migrations)
		expect(data).toEqual({ version: 2, key1: 'value1', key2: 'value1' });
	})
})

describe('TRANSFORM migration', () => {
	test('fails with invalid key', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.TRANSFORM,
						key: 3,
						transformFnc: () => {}
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid key for TRANSFORM migration")
	})

	test('fails with invalid transformFnc', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.TRANSFORM,
						key: 'key1',
						transformFnc: 3
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid transformFnc for TRANSFORM migration")
	})

	test('succeeds with valid migration object', () => {
		const data = { version: 1, key1: 'value1' }; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.TRANSFORM,
						key: 'key1',
						transformFnc: (value) => value + " test"
					}
				]
			}
		]

		// Test
		migrateData(data, migrations)
		expect(data).toEqual({ version: 2, key1: 'value1 test' });
	})
})

describe('MERGE migration', () => {
	test('fails with invalid toKey', async () => {
		const data = {version: 1, key1: 'value1', key2: 'value2'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.MERGE,
						toKey: 3,
						fromKey: 'key2',
						mergeFnc: () => {}
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid toKey for MERGE migration")
	})

	test('fails with invalid fromKey', async () => {
		const data = {version: 1, key1: 'value1', key2: 'value2'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.MERGE,
						toKey: 'key1',
						fromKey: 3,
						mergeFnc: () => {}
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid fromKey for MERGE migration")
	})

	test('fails with invalid mergeFnc', async () => {
		const data = {version: 1, key1: 'value1', key2: 'value2'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.MERGE,
						toKey: 'key1',
						fromKey: 'key2',
						mergeFnc: 3
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid mergeFnc for MERGE migration")
	})

	test('succeeds with valid migration object', () => {
		const data = {version: 1, key1: 'value1', key2: 'value2'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.MERGE,
						toKey: 'key1',
						fromKey: 'key2',
						mergeFnc: (value1, value2) => value1 + " " + value2
					}
				]
			}
		]

		// Test
		migrateData(data, migrations)
		expect(data).toEqual({ version: 2, key1: 'value1 value2', key2: 'value2' });
	})
})

describe('REMOVE migration', () => {
	test('fails with invalid key', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.REMOVE,
						key: 3
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid key for REMOVE migration")
	})

	test('succeeds with valid migration object', () => {
		const data = { version: 1, key1: 'value1' }; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.REMOVE,
						key: 'key1'
					}
				]
			}
		]

		// Test
		migrateData(data, migrations)
		expect(data).toEqual({ version: 2 });
	})
})

describe('RENAME migration', () => {
	test('fails with invalid fromKey', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.RENAME,
						fromKey: 3,
						toKey: 'key2'
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid fromKey for RENAME migration")
	})

	test('fails with invalid toKey', async () => {
		const data = {version: 1, key1: 'value1'}; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.RENAME,
						fromKey: 'key1',
						toKey: 3
					}
				]
			}
		]

		// Test
		await expect(async () => migrateData(data, migrations)).rejects.toThrow("Invalid toKey for RENAME migration")
	})

	test('succeeds with valid migration object', () => {
		const data = { version: 1, key1: 'value1' }; // Initial data
		// Migration object
		const migrations = [
			{
				fromVersion: 1,
				toVersion: 2,
				steps: [
					{
						type: MigrationType.RENAME,
						fromKey: 'key1',
						toKey: 'key2'
					}
				]
			}
		]

		// Test
		migrateData(data, migrations)
		expect(data).toEqual({ version: 2, key2: 'value1' });
	})
})
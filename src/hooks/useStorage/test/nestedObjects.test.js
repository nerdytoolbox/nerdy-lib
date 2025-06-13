import { getNestedValue, removeNestedValue, setNestedValue } from "../nestedObjects";

describe('getNestedValue', () => {
	test('get from object = null', async () => {
		await expect(async () => getNestedValue(null, "key1")).rejects.toThrow("Object must be a non-null object.")
	})

	test('get from object = string', async () => {
		await expect(async () => getNestedValue("string", "key1")).rejects.toThrow("Object must be a non-null object.")
	})

	test('path is just a dot', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => getNestedValue(data, ".")).rejects.toThrow("Path cannot start or end with the delimiter \".\"")
	})

	test('from non existing key on root level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => getNestedValue(data, "key2")).rejects.toThrow("Cannot get value at path: key2. Key key2 does not exist.")
	})

	test('from non existing key on nested level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => getNestedValue(data, "key1.key2.key4")).rejects.toThrow("Cannot get value at path: key1.key2.key4. Key key4 does not exist.")
	})

	test('from existing key on root level', () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(getNestedValue(data, "key1")).toEqual({ key2: { key3: 'value' } });
	})

	test('from existing key on nested level', () => {
		const data = { key1: { key2: { key3: 'value' } } };

		expect(getNestedValue(data, "key1.key2.key3")).toEqual('value');
	})
})

describe('setNestedValue', () => {
	test('set from object = null', async () => {
		await expect(async () => setNestedValue(null, "key1", "value1")).rejects.toThrow("Object must be a non-null object.")
	})

	test('set from object = string', async () => {
		await expect(async () => setNestedValue("string", "key1", "value1")).rejects.toThrow("Object must be a non-null object.")
	})

	test('path is just a dot', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => setNestedValue(data, ".", "value1")).rejects.toThrow("Path cannot start or end with the delimiter \".\"")
	})

	test('set on nested key, which is not an object', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => setNestedValue(data, "key1.key2.key3.key4", "value")).rejects.toThrow("Cannot set value at path \"key1.key2.key3.key4\": \"key3\" is not an object.")
	})

	test('set on non existing key on root level', () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(setNestedValue(data, "key4", "value4")).toEqual({ key1: { key2: { key3: "value" } }, key4: "value4" });
	})

	test('set on non existing key on nested level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(setNestedValue(data, "key4.key5.key6", "value6")).toEqual({ key1: { key2: { key3: "value" } }, key4: { key5: { key6: "value6" } } });
	})

	test('set on existing key on root level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(setNestedValue(data, "key1", "value1")).toEqual({ key1: "value1" });
	})

	test('set on existing key on nested level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(setNestedValue(data, "key1.key2.key3", "value3")).toEqual({ key1: { key2: { key3: "value3" } } });
	})
})

describe('removeNestedValue', () => {
	test('set from object = null', async () => {
		await expect(async () => removeNestedValue(null, "key1")).rejects.toThrow("Object must be a non-null object.")
	})

	test('set from object = string', async () => {
		await expect(async () => removeNestedValue("string", "key1")).rejects.toThrow("Object must be a non-null object.")
	})

	test('path is just a dot', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => removeNestedValue(data, ".")).rejects.toThrow("Path cannot start or end with the delimiter \".\"")
	})

	test('remove on nested key, which is not an object', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => removeNestedValue(data, "key1.key2.key3.key4")).rejects.toThrow("Cannot remove value at path \"key1.key2.key3.key4\": \"key4\" does not exist.")
	})

	test('remove non existing key on root level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => removeNestedValue(data, "key2")).rejects.toThrow("Cannot remove value at path \"key2\": \"key2\" does not exist.")
	})

	test('remove non existing key on nested level', async () => {
		const data = { key1: { key2: { key3: 'value' } } };
		await expect(async () => removeNestedValue(data, "key1.key2.key4")).rejects.toThrow("Cannot remove value at path \"key1.key2.key4\": \"key4\" does not exist.")
	})

	test('remove existing key on root level', () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(removeNestedValue(data, "key1")).toEqual({ });
	})

	test('remove existing key on nested level', () => {
		const data = { key1: { key2: { key3: 'value' } } };
		expect(removeNestedValue(data, "key1.key2.key3")).toEqual({ key1: { key2: { } } });
	})
})
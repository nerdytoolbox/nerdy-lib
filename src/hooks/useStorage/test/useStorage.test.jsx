import { act, renderHook, waitFor } from "@testing-library/react"
import { useStorage } from "../useStorage";

const LOCAL_STORAGE_KEY = 'localStorageKey';
const DEFAULT_DATA = { key1: 'value1', key2: { key3: 3 } };

test('test useStorage hook', async () => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_DATA));

	const { result } = renderHook( () => useStorage(LOCAL_STORAGE_KEY, DEFAULT_DATA, []))

	await waitFor(() => expect(result.current.data).not.toBeNull());
	expect(result.current.data).toEqual({ version: 1, key1: 'value1', key2: { key3: 3 } });

	act(() => {
		result.current.update([{ path: 'key2.key3', value: "now it's a string" }]);
	})
	await waitFor(() => expect(result.current.data.key2.key3).toBe("now it's a string"));

	act(() => {
		result.current.update([
			{ path: '', value: { newKey: "newValue" } },
			{ path: 'newKey', value: "newValue2" }
		]);
	})
	await waitFor(() => expect(result.current.data).toStrictEqual({ newKey: "newValue2" }));
});
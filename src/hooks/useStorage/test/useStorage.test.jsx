import { act, renderHook, waitFor } from "@testing-library/react"
import { useStorage } from "../useStorage";

const LOCAL_STORAGE_KEY = 'localStorageKey';
const DEFAULT_DATA = { key1: 'value1', key2: { key3: 3 } };

test('test useStorage hook', async () => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_DATA));

	const { result } = renderHook( () => useStorage(LOCAL_STORAGE_KEY, DEFAULT_DATA, 1, []))

	await waitFor(() => expect(result.current.data).not.toBeNull());
	expect(result.current.data).toEqual({ version: 1, key1: 'value1', key2: { key3: 3 } });

	act(() => {
		result.current.update('key2.key3', "now it's a string");
	})
	await waitFor(() => expect(result.current.data.key2.key3).toBe("now it's a string"));
});
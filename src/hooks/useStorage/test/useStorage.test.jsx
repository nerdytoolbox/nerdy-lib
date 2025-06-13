import { renderHook, waitFor } from "@testing-library/react"
import { useStorage } from "../useStorage";

const LOCAL_STORAGE_KEY = 'localStorageKey';
const DEFAULT_DATA = { foo: 'bar' };

test('loads from and saves to localStorage', async () => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ foo: 'baz' }));

	const { result } = renderHook( () => useStorage(LOCAL_STORAGE_KEY, DEFAULT_DATA, 1, []))

	await waitFor(() => expect(result.current.data).not.toBeNull());
	expect(result.current.data).toEqual({ version: 1, foo: 'baz' });
});
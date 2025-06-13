import { useState, useEffect } from 'react';
import { migrateData } from "./migrations";
import { validateMigrations } from "./validateMigrations";
import { copyNestedObject, updateNestedValue } from "./nestedObjects";

export const useStorage = (localStorageKey, defaultData = {}, version, migrations) => {
	const [data, setData] = useState(null);

	// Load initial data
	useEffect(() => {
		validateMigrations(migrations)

		const fetchData = async () => {
			const loadData = JSON.parse(localStorage.getItem(localStorageKey) || JSON.stringify(defaultData));

			// Apply migrations if provided
			if (migrations && version !== loadData.version) {
				const migratedData = await migrateData(loadData, migrations)
				setData(migratedData)
			} else {
				setData(loadData)
			}
		}

		fetchData();
	}, [])

	// Sync to localStorage whenever data changes
	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(data));
	}, [localStorageKey, data]);

	/*
	* Function to update a specific path in the data object
	*
	* path: string - The path to the property to update, e.g., 'user.name'
	* value: any - The new value to set at the specified path
	*/
	const update = (path, value) => {
		setData(updateNestedValue(copyNestedObject(data), path, value));
	}

	return { data, update };
}

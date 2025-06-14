import { useState, useEffect } from 'react';
import { migrateData } from "./migrations";
import { validateMigrations, validateUpdateBatch } from "./validations";
import { copyNestedObject, setNestedValue } from "./nestedObjects";

export const useStorage = (localStorageKey, defaultData = {}, migrations) => {
	const [data, setData] = useState(null);

	// Load initial data
	useEffect(() => {
		validateMigrations(migrations)
		const version = migrations.length > 0 ? migrations[migrations.length - 1].toVersion : 1;

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
	* Functions to update specific paths in the data object.
	*
	* updateBatch: An object containing the paths and values to update.
	*/
	const update = (updateBatch) => {
		validateUpdateBatch(updateBatch)

		let newData = copyNestedObject(data);
		for (const update of updateBatch) {
			newData = setNestedValue(newData, update.path, update.value)
		}

		setData(newData)
	}

	return { data, update };
}

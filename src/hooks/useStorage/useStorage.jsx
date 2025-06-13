import { useState, useEffect } from 'react';
import { migrateData } from "./migrations";
import { validateMigrations } from "./validateMigrations";

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

	return { data };
}

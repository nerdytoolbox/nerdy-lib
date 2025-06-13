/*
* Copy a nested object
*/
export const copyNestedObject = (obj) => {
	if (obj == null || typeof obj !== 'object') {
		throw new Error("Object must be a non-null object.");
	}
	return JSON.parse(JSON.stringify(obj));
}

const basicChecks = (obj, path) => {
	if (obj == null || typeof obj !== 'object') {
		throw new Error("Object must be a non-null object.");
	}
	if (path.startsWith(".") || path.endsWith(".")) {
		throw new Error(`Path cannot start or end with the delimiter "."`);
	}
}

/*
* This function retrieves a value from a nested path in an object.
*
* obj: The object to modify.
* path: A string representing the path to the nested property, e.g., "key1.key2.key3".
*/
export const getNestedValue = (obj, path) => {
	basicChecks(obj, path);

	const keys = path.split('.');
	let current = obj;

	for (const key of keys) {
		if (current === null || typeof current !== 'object' || !(key in current)) {
			throw new Error(`Cannot get value at path: ${path}. Key ${key} does not exist.`);
		}
		current = current[key];
	}

	return current;
}

/*
* This function sets a value at a nested path in an object.
*
* obj: The object to modify.
* path: A string representing the path to the nested property, e.g., "key1.key2.key3".
* value: The value to set at the specified path.
*/
export const setNestedValue = (obj, path, value) => {
	basicChecks(obj, path);

	const keys = path.split('.');
	const lastKey = keys.pop();
	let current = obj;

	for (const key of keys) {
		if (current[key] === undefined || current[key] === null) {
			current[key] = {};
		} else if (typeof current[key] !== 'object') {
			throw new Error(`Cannot set value at path "${path}": "${key}" is not an object.`);
		}
		current = current[key];
	}

	current[lastKey] = value;
	return obj;
}

/*
* This function updates a value at a nested path in an object.
* It will not create new objects in the path if it does not exist.
*
* obj: The object to modify.
* path: A string representing the path to the nested property, e.g., "key1.key2.key3".
* value: The value to update at the specified path. Must be a string, number, boolean or null.
*/
export const updateNestedValue = (obj, path, value) => {
	basicChecks(obj, path);

	if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean' && value !== null) {
		throw new Error(`Value must be a string, number, boolean or null. Received: ${typeof value}`);
	}

	const keys = path.split('.');
	const lastKey = keys.pop();
	let current = obj;

	for (const key of keys) {
		if (current[key] === undefined || current[key] === null || typeof current[key] !== 'object') {
			throw new Error(`Cannot set value at path "${path}": "${key}" is not an object.`);
		}
		current = current[key];
	}

	current[lastKey] = value;
	return obj;
}

/*
* This function removes a value at a nested path in an object.
*
* obj: The object to modify.
* path: A string representing the path to the nested property, e.g., "key1.key2.key3".
*/
export const removeNestedValue = (obj, path) => {
	basicChecks(obj, path);

	const keys = path.split('.');
	const lastKey = keys.pop();
	let current = obj;

	for (const key of keys) {
		if (current === null || typeof current !== 'object' || !(key in current)) {
			throw new Error(`Cannot remove value at path "${path}": "${key}" does not exist.`);
		}
		current = current[key];
	}

	if (current === null || typeof current !== 'object' || !(lastKey in current)) {
		throw new Error(`Cannot remove value at path "${path}": "${lastKey}" does not exist.`);
	}
	debugger

	delete current[lastKey];
	return obj;
};
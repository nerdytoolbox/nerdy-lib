import React from "react";

export const TextInput = ({ extraClassNames }) => {
	const classNames = `text-input ${extraClassNames}`
	return (
		<input className={classNames} />
	)
}
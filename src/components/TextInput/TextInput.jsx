import React from "react";
import './TextInput.scss';

export const TextInput = ({ placeholder, extraClassNames = '' }) => {
	const classNames = `text-input ${extraClassNames}`
	return (
		<input className={classNames} placeholder={placeholder} />
	)
}
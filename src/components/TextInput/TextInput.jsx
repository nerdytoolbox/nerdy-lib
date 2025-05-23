import React from "react";
import './TextInput.scss';

export const TextInput = ({ placeholder, color = 'gray', extraClassNames = '' }) => {
	const classNames = `text-input color-${color} ${extraClassNames}`
	return (
		<input className={classNames} placeholder={placeholder} />
	)
}
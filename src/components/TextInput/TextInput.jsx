import React from "react";
import './TextInput.scss';

export const TextInput = ({
	value = '',
	onChange = () => {},
  placeholder,
  extraClassNames = '' }) => {
	const classNames = `text-input ${extraClassNames}`
	return (
		<input className={classNames} value={value} placeholder={placeholder} onChange={onChange} />
	)
}
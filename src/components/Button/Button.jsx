import React from "react";
import './Button.scss'

export const Button = ({
	children,
	onClick,
	size = 'default',
	shape = 'rounded',
	fill = 'bordered',
	color = 'gray',
	disabled,
}) => {
	return (
		<button className={`btn align-center ${size}-${shape} ${fill}-${color}`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}
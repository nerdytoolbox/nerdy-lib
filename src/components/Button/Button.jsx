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
	selected
}) => {
	return (
		<button className={`btn align-center ${size}-${shape} ${fill}-${color}${selected ? "-selected" : ""}`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}
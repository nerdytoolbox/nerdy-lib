import React from "react";
import './Button.scss'

export const Button = ({
	children,
	onClick,
	size = 'default',
	shape = 'rounded',
	fill = 'filled',
	color = 'gray',
	shade1 = "shade2",
	shade2 = "shade12",
	disabled,
	selected
}) => {
	return (
		<button className={`btn align-center ${size} ${shape} ${fill}-${color}-${shade1}-${shade2}${selected ? "-selected" : ""}`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}
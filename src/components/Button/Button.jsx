import React from "react";

export const Button = ({ children, onClick }) => {
	return (
		<button className="nerdy-button" onClick={onClick}>
			{children}
		</button>
	);
}
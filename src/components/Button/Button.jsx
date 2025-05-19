import React from "react";

const Button = ({ children, onClick }) => {
	return (
		<button className="nerdy-button" onClick={onClick}>
			{children}
		</button>
	);
}

export default Button
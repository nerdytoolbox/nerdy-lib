import React from "react";
import { AiFillHome } from "react-icons/ai";
import './Hub.scss'

export const Hub = ({ title, handleClickHome, children }) => {
	return (
		<div className="main-container">
			<div className="tool-hub">
				<AiFillHome className="hub-icon" onClick={handleClickHome} />
				<div className="hub-title">{title}</div>
			</div>
			<div className="tool-content">
				{children}
			</div>
		</div>
	)
}
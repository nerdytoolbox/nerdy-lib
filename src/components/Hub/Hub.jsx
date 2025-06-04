import React from "react";
import { AiFillHome } from "react-icons/ai";
import './Hub.scss'

export const Hub = ({
  title,
	icon,
  children,
  footer,
  className
}) => {
	const handleClick = (e) => {
		e.stopPropagation()
		window.location.href = "/"
	}

	return (
		<div className={`main-container ${className}`}>
			<div className="tool-hub">
				{icon && <img src={icon} alt="Home icon" className="custom-icon" onClick={handleClick} />}
				{!icon && <AiFillHome className="hub-icon" onClick={handleClick} />}
				<div className="hub-title">{title}</div>
			</div>
			<div className="tool-content">
				{children}
			</div>
			<div className="tool-footer">
				{footer}
			</div>
		</div>
	)
}
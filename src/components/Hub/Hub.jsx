import React from "react";
import logo from '../../assets/NerdyToolboxThumbnail.png'
import './Hub.scss'

export const Hub = ({
  children,
  footer,
}) => {
	const handleClick = (e) => {
		e.stopPropagation()
		window.location.href = "/"
	}

	return (
		<div className="main-container">
			<div className="tool-hub">
				<div className="hub-title">
					<img src={logo} alt="Logo" className="title-icon" onClick={handleClick} />
					<div className="title-text" onClick={handleClick}>NERDY TOOLBOX</div>
				</div>
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
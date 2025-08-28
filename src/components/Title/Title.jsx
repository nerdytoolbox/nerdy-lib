import React from "react"
import logo from '../../assets/NerdyToolboxThumbnail.png'
import './Title.scss'

export const Title = ({ icon, text, noIcon = false }) => {
	if (!icon) {
		icon = logo
	}

	return (
		<div className="title">
			{!noIcon && <img src={icon} alt={text} className="title-icon" />}
			<div className="title-text">{text}</div>
		</div>
	)
}
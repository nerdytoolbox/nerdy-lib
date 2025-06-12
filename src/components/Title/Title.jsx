import React from "react"
import logo from '../../assets/NerdyToolboxThumbnail.png'
import './Title.scss'

export const Title = ({ icon, text }) => {
	if (!icon) {
		icon = logo
	}

	return (
		<div className="title">
			<img src={icon} alt={text} className="title-icon" />
			<div className="title-text">{text}</div>
		</div>
	)
}
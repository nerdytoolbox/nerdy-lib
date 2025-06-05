import React from "react"
import './Title.scss'

const Title = ({ icon, text }) => {
	return (
		<div className="title">
			<img src={icon} alt={text} className="title-icon" />
			<div className="title-text">{text}</div>
		</div>
	)
}

export default Title
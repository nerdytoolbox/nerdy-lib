import React, { useEffect, useState } from "react";

import './CookieModal.scss'
import { Button } from "../Button/Button";

const COOKIE_KEY = "cookie-settings"

export const CookieModal = () => {
	const [cookieSetting, setCookieSettings] = useState(localStorage.getItem(COOKIE_KEY) ? JSON.parse(localStorage.getItem(COOKIE_KEY)) : null)

	useEffect(() => {
		localStorage.setItem(COOKIE_KEY, JSON.stringify(cookieSetting))
	}, [cookieSetting]);

	const handleClick = (value) => {
		setCookieSettings(value)
	}

	return (
		<div className={`cookie-modal ${cookieSetting !== null ? "hide" : ""}`}>
			We use analytics to understand how visitors use our site. We don't store any personal data.
			<div className="buttons">
				<Button onClick={() => handleClick(true)} color="green">Accept</Button>
				<Button onClick={() => handleClick(false)} color="red">Reject</Button>
			</div>
		</div>
	)
}
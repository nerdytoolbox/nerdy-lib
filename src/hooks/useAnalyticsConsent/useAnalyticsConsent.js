import { useEffect } from "react";

import { COOKIE_KEY } from "../../util/constants";

const GA_ID = "G-EE5K3Z6K17"

export const useAnalyticsConsent = () => {
	useEffect(() => {
		const cookie_preference = JSON.parse(localStorage.getItem(COOKIE_KEY));

		if (window.location.hostname !== "localhost" &&
			window.location.hostname !== "127.0.0.1" &&
			cookie_preference === true
		) {
			const script = document.createElement("script");
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
			document.head.appendChild(script);

			window.dataLayer = window.dataLayer || [];
			function gtag(){window.dataLayer.push(arguments);}
			window.gtag = gtag;
			gtag('js', new Date());
			gtag('config', GA_ID);
		}
	}, []);
}
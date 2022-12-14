import "styles/main.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=5,minimum-scale=5,maximum-scale=5,user-scalable=yes"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				<title>Next.js minimalist starter</title>

				<link rel="manifest" href="/manifest.json" />
				<link
					href="icons/icon-16x16.png"
					rel="icon"
					type="image/png"
					sizes="16x16"
				/>
				<link
					href="/icons/icon-32x32.png"
					rel="icon"
					type="image/png"
					sizes="32x32"
				/>
				<link rel="apple-touch-icon" href="icons/icon-16x16.png"></link>
				<meta name="theme-color" content="#317EFB" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

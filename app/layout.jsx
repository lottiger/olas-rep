import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Olas Rep - Verkstad, Hydraulik och Markservice i Järpen',
	description:
		'Professionell verkstad, hydraulikservice, smide och markservice i Järpen. Vi erbjuder service på alla biltyper och entreprenadmaskiner.',
	keywords:
		'verkstad, hydraulik, smide, markservice, bärgning, Järpen, bilservice, reparation',
	openGraph: {
		title: 'Olas Rep & Bärgning',
		description: 'Professionell verkstad och tjänster i Järpen',
		url: 'https://olasrep.com',
		type: 'website',
	},
	robots: 'index, follow',
	alternates: {
		canonical: 'https://olasrep.com',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="sv">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="canonical" href="https://olasrep.com" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}
			>
				{children}
			</body>
		</html>
	);
}

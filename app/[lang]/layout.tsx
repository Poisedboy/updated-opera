import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../theme-provider";
import Navigation from "../../components/Navigation";
import { i18n } from "@/i18n.config";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "breakfasts",
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: {
		lang: Locale;
	};
}) {
	const { NavigationBar } = await getDictionary(lang);
	let links = NavigationBar.links.map((link) => ({
		id: link.id,
		name: link.name,
		link: `/${lang}${link.link}`,
	}));

	return (
		<html lang={lang}>
			<head>
				<link rel="shorcut icon" href="./favicon.ico" />
				<meta name="robots" content="all" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Navigation lang={lang} links={links} />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

import RootContent from "./components/RootContent";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], preload: true });

export const metadata = {
	title: "MANAGE COURSES",
	description: "Simple student manage panel",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Toaster />
				<RootContent>{children}</RootContent>
			</body>
		</html>
	);
}

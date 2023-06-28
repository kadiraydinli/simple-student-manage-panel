import { Montserrat } from "next/font/google";

import RootContent from "./components/RootContent";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Manage Students",
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
				<RootContent>{children}</RootContent>
			</body>
		</html>
	);
}

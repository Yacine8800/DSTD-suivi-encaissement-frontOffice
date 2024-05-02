import AppProviders from "@/provider/app";
import "../themes/globals.css";

export const metadata = {
	title: "Suivi Encaissement",
	description: "Generated by DSTD",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				// style={{
				//   background: `linear-gradient(to right, #ECF7F9, #F4F6F3)`,
				// }}
				className="bg-[#F8F8F8]"
			>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	);
}

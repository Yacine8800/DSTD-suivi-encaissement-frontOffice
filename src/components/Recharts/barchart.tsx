"use client";
import React, { PureComponent, use, useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const generateRandomData = () => {
	const data = [];
	const months = [
		"01 / 12",
		"02 / 12",
		"03 / 12",
		"04 / 12",
		"05 / 12",
		"06 / 12",
		"07 / 12",
		"08 / 12",
		"09 / 12",
		"10 / 12",
		"11 / 12",
		"12 / 12",
	];

	for (let i = 0; i < months.length; i++) {
		const randomBordereau = Math.floor(Math.random() * 5000) + 1000;
		const randomReleve = Math.floor(Math.random() * 3000) + 500;

		data.push({
			name: months[i],
			"Montant Bordereau": randomBordereau,
			"Montant relevé": randomReleve,
		});
	}

	return data;
};

const data = generateRandomData();

<style jsx>{`
	.recharts-symbols path {
		border-radius: 5px; /* Vous pouvez ajuster la valeur de border-radius selon votre préférence */
	}
`}</style>;

const customTick = ({ x, y, payload }: { x: any; y: any; payload: any }) => {
	return (
		<text
			x={x}
			y={y}
			textAnchor="middle"
			fill="#666"
			fontSize="10px"
			fontFamily="DM Sans"
			fontWeight="400"
			dy={16}
		>
			{payload.value}
		</text>
	);
};

interface LegendEntry {
	color: string;
	value: string;
}

const renderLegend = (props: any) => {
	const { payload } = props;

	return (
		<ul
			style={{
				listStyle: "none",
				margin: 15,
				padding: 0,
				display: "flex",
				flexDirection: "row",
				flexWrap: "nowrap",
				overflowX: "auto",
				marginLeft: 22,
			}}
		>
			{payload.map((entry: LegendEntry, index: number) => (
				<li
					key={`item-${index}`}
					style={{ display: "flex", alignItems: "center", marginRight: 80 }}
				>
					<svg width="10" height="10" style={{ marginRight: 5 }}>
						<rect width="10" height="10" rx="5" ry="5" fill={entry.color} />
					</svg>
					<span style={{ fontSize: "14px" }}>{entry.value}</span>
				</li>
			))}
		</ul>
	);
};

const Barchart1 = () => {
	// responsive avec un évènement qui écoute la taille de la fenetre
	const [largeur, setLargeur] = useState(852);

	const afficherTailleFenetre = () => {
		const largeurFenetre = window.innerWidth;
		console.log("Largeur de la fenêtre : " + largeurFenetre + " pixels");
		console.log("Hauteur de la fenêtre : " + window.innerHeight + " pixels");

		let newLargeur;
		switch (true) {
			case largeurFenetre > 1600:
				newLargeur = 1500;
				break;
			case largeurFenetre > 1300:
				newLargeur = 1300;
				break;
			case largeurFenetre > 1000:
				newLargeur = 1200;
				break;
			case largeurFenetre > 700:
				newLargeur = 900;
				break;
			default:
				newLargeur = 600;
		}

		setLargeur(newLargeur);
	};

	useEffect(() => {
		afficherTailleFenetre();
		window.addEventListener("resize", afficherTailleFenetre);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", afficherTailleFenetre);
		};
	}, []);
	return (
		<BarChart
			width={largeur}
			height={560}
			data={data}
			barCategoryGap={2}
			className="overflow-auto  w-full"
		>
			<Legend
				content={renderLegend}
				verticalAlign="top"
				wrapperStyle={{
					fontSize: "15px",
					fontFamily: "Open Sans",
					justifyContent: "start",
					fontWeight: "600",
					lineHeight: "20px",
				}}
				className="absolute top-0 left-0 right-auto "
			/>
			<XAxis
				dataKey="name"
				tick={customTick}
				axisLine={false}
				tickLine={false}
			/>
			<Tooltip
				contentStyle={{
					fontSize: "10px",
					lineHeight: "15px",
					backgroundColor: "rgba(255, 255, 255, 0.9)",
					border: "none",
					borderRadius: "4px",
					padding: "10px",
				}}
			/>
			<Bar
				dataKey="Montant Bordereau"
				fill="#58969E"
				radius={[10, 10, 10, 10]}
				barSize={12}
			/>
			<Bar
				dataKey="Montant relevé"
				fill="#8FC816"
				radius={[10, 10, 10, 10]}
				barSize={12}
			/>
		</BarChart>
	);
};

export default Barchart1;

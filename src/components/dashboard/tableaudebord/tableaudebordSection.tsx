import Barchart from "@/components/Recharts/barchart";
import Piechart from "@/components/Recharts/Piechart";
import { Card } from "@mui/material";
import React from "react";

const TableaudebordSection = () => {
	return (
		<div className="flex justify-start h-100">
			<Card
				elevation={0}
				className=" h-[595px] w-full p-4 mb-6 mt-8 ml-4 rounded-lg  overflow-scroll"
			>
				<div className="flex justify-start items-center">
					<Barchart />
				</div>
			</Card>
			<Piechart />
		</div>
	);
};

export default TableaudebordSection;

import Barchart from "@/components/Recharts/barchart";
import Piechart from "@/components/Recharts/Piechart";
import PiechartTaux from "@/components/Recharts/PiechartTaux";
import { Card } from "@mui/material";
import React from "react";

const TableaudebordSection = () => {
	return (
		<div className="lg:flex justify-center mx-auto h-100 w-full ">
			<Card
				elevation={0}
				className=" h-[595px] p-4 mb-6 mt-5 lg:ml-4 rounded-lg lg:w-7/12 max-lg:w-10/12 max-sm:w-11/12 justify-center mx-auto"
			>
				<div className="flex justify-center items-center">
					<Barchart />
				</div>
			</Card>
			<div className="lg:w-5/12 max-lg:w-full ">
				<Piechart />
				<PiechartTaux />
			</div>
		</div>
	);
};

export default TableaudebordSection;

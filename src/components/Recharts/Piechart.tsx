"use client";

import React from "react";
import {
	CircularProgress,
	Card,
	CardBody,
	CardHeader,
} from "@nextui-org/react";

const Piechart = () => {
	const data = [
		{ name: "Chèques", value: 67, color: "#0D1286", color2: "#0D128626" },
		{ name: "Espèces", value: 46, color: "#009640", color2: "#0096401C" },
	];

	return (
		<Card className="lg:ml-4 shadow-none max-lg:w-10/12 max-sm:w-11/12 justify-center mx-auto h-[265px] p-1 mt-5 rounded-lg overflow-hidden">
			<CardHeader className="overflow-hidden">
				<p className="font-medium">Ratio des modes de paiement</p>
			</CardHeader>
			<CardBody className="justify-center items-center overflow-hidden">
				<div className="flex mb-4 lg:gap-10">
					{data.map((item, index) => (
						<div key={index} className="items-center pl-5">
							<div className="flex mb-3">
								<span
									className="w-3 h-3 rounded-full mr-2 mt-2"
									style={{ backgroundColor: item.color }}
								></span>
								<p className="text-xl font-extralight">{item.name}</p>
							</div>
							<div className="flex justify-center items-center">
								<CircularProgress
									classNames={{
										svg: "w-24 h-24 lg:w-30 lg:h-30 xl:w-40 xl:h-40",
										indicator: `text-[${item.color}]`,
										track: `stroke-[${item.color2}]`,
										value: "text-xl font-semibold",
									}}
									value={item.value}
									strokeWidth={2}
									showValueLabel={true}
								/>
							</div>
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	);
};

export default Piechart;

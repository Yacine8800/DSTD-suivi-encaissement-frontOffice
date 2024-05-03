import EnciassmentSection from "@/components/dashboard/encaissement/enciassmentSection";
import { Card } from "@mui/material";
import React from "react";

const page = () => {
	return (
		<div className=" h-[900px] overflow-hidden flex items-center bg-[#F8F8F8]">
			{/* <Card
        className=" h-[900px] overflow-hidden flex items-center justify-center p-3 bg-[#F8F8F8]"
        elevation={0}
      > */}
			<div className="w-full ">
				<EnciassmentSection />
			</div>
			{/* </Card> */}
		</div>
	);
};

export default page;

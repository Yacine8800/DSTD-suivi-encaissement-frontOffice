import Barchart from "@/components/Recharts/barchart";
import Piechart from "@/components/Recharts/Piechart";
import { Card } from "@mui/material";
import React from "react";

const TableaudebordSection = () => {
  return (
    <div className="flex justify-start h-100">
      <Card elevation={0} className=" h-[595px] p-4 mb-6 mt-8 ml-10 rounded-lg overflow-hidden">
        <div className="flex justify-start items-center">
          <Barchart />
        </div>
      </Card>
      <Piechart />
    </div>
  );
};

export default TableaudebordSection;

import Barchart from "@/components/Recharts/barchart";
import { Card } from "@mui/material";
import React from "react";

const TableaudebordSection = () => {
  return (
    <div className="flex justify-start  h-100">
      <Card
        elevation={0}
        className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 p-4 mb-6 mt-8 ml-10 rounded-lg "
      >
        <div className="flex justify-start items-center">
          <Barchart />
        </div>
      </Card>
    </div>
  );
};

export default TableaudebordSection;

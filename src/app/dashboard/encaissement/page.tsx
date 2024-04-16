import EnciassmentSection from "@/components/dashboard/encaissement/enciassmentSection";
import { Card } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Card
        className="mx-[100px] h-[900px] mt-[60px] overflow-hidden flex items-center justify-center"
        elevation={0}
      >
        <div className="w-full">
          <EnciassmentSection />
        </div>
      </Card>
    </div>
  );
};

export default page;

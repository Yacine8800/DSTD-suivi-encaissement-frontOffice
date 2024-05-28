"use client"

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
      <Card className="ml-8 shadow-none w-[830px] h-[265px] p-1 mt-5 rounded-lg overflow-hidden">
        <CardHeader className="overflow-hidden">
          <p className="font-medium">Ratio des modes de paiement</p>
        </CardHeader>
        <CardBody className="justify-center items-center overflow-hidden">
          <div className="flex mb-4 gap-20">
            {data.map((item, index) => (
              <div key={index} className="items-center pl-5">
                <div className="flex mb-3">
                  <span
                    className="w-3 h-3 rounded-full mr-2 mt-2"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <p className="text-1xL font-extralight">{item.name}</p>
                </div>
                <CircularProgress
                  classNames={{
                    svg: `w-36 h-34 bg-[${item.color2}] rounded-full`,
                    indicator: `text-[${item.color}]`,
                    track: `w-36 h-34 stroke-[${item.color2}]`,
                    value: `text-2xl font-semibold text-[${item.color}]`,
                  }}
                  value={item.value}
                  strokeWidth={2}
                  showValueLabel={true}
                />
              </div>
            ))}
          </div>
        </CardBody>
        </Card>

  );
}

export default Piechart;

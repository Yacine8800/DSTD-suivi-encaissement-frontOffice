"use client"

import React from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const PiechartTaux = () => { 


  const dataCompletion = [
    { name: "Lignes complètes", value: 67, color: "#0D1286" },
    { name: "Lignes incomplètes", value: 46, color: "#0D128626" },
  ];

  return (

<Card className="ml-8 shadow-none w-[830px] h-[310px] p-1 mt-5 rounded-lg overflow-hidden">

<CardHeader className="overflow-hidden">
          <p className="font-medium">Taux de complétion globale</p>
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex justify-center items-center">
            <CircularProgress
              classNames={{
                svg: "w-40 h-40",
                indicator: "text-[#0D1286]",
                track: "stroke-[#0D128626]",
                value:
                  "w-20 h-20 mt-10 ml-10 text-2xl font-semibold bg-[#0D1286] rounded-full text-white",
              }}
              value={75}
              strokeWidth={2}
              showValueLabel={true}
            />
          </div>
          <div className="flex flex-wrap gap-[80px] mt-8">
            {dataCompletion.map((item, index) => (
              <div key={index} className="flex">
                <span
                  className="w-3 h-3 rounded-full mr-2 mt-2 font-thin"
                  style={{ backgroundColor: item.color }}
                ></span>
                <p className="text-1xL font-extralight">{item.name}</p>
              </div>
            ))}
          </div>
        </CardBody>
        </Card>



  );
}

export default PiechartTaux;

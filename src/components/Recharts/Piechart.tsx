import React from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

export default function App() {
  const data = [
    { name: "Chèques", value: 67, color: "#0D1286", color2: "#0D128626" },
    { name: "Espèces", value: 46, color: "#009640", color2: "#0096401C" },
  ];

  const dataCompletion = [
    { name: "Lignes complètes", value: 67, color: "#0D1286" },
    { name: "Lignes incomplètes", value: 46, color: "#0D128626" },
  ];

  return (
    <div className="ml-4 overflow-hidden">
      <Card className="w-[350px] h-[260px] p-1 mt-8 rounded-lg overflow-hidden">
        <CardHeader className="overflow-hidden ">
          <p>Ratio des modes de paiement</p>
        </CardHeader>
        <CardBody className="justify-center items-center overflow-hidden">
          <div className="flex">
            {data.map((item, index) => (
              <div key={index} className="items-center pl-5">
                <div className="flex mb-3">
                  <span
                    className="w-3 h-3 rounded-full mr-2 mt-2"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <p className="text-1xL">{item.name}</p>
                </div>
                <CircularProgress
                  classNames={{
                    svg: `w-36 h-37 bg-[${item.color2}] rounded-full`,
                    indicator: `text-[${item.color}]`,
                    track: `stroke-[${item.color}]`,
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
      <Card className="w-[350px] h-[320px] p-1 mt-5 rounded-lg overflow-hidden">
        <CardHeader className="overflow-hidden">
          <p>Taux de complétion globale</p>
        </CardHeader>
        <CardBody className="justify-center items-center overflow-hidden">
          <div className="flex">
            <div className="items-center">
              <CircularProgress
                classNames={{
                  svg: "w-40 h-40",
                  indicator: `text-[#0D1286]`,
                  track: "stroke-[#0D128626]",
                  value: `w-20 h-20 mt-10 ml-10 text-2xl font-semibold bg-[#0D1286] rounded-full text-white`,
                }}
            
                value={75}
                strokeWidth={2}
                showValueLabel={true}
              />
              {dataCompletion.map((item, index) => (
                <div key={index} className="flex flex-row">
                  <span
                    className="w-3 h-3 rounded-full mr-2 mt-2"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <p className="text-1xL">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

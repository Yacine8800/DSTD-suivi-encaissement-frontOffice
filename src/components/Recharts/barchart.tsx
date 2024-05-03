"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const generateRandomData = () => {
  const data = [];
  const months = [
    "01 / 12",
    "02 / 12",
    "03 / 12",
    "04 / 12",
    "05 / 12",
    "06 / 12",
    "07 / 12",
    "08 / 12",
    "09 / 12",
    "10 / 12",
    "11 / 12",
    "12 / 12",
  ];

  for (let i = 0; i < months.length; i++) {
    const randomBordereau = Math.floor(Math.random() * 5000) + 1000;
    const randomReleve = Math.floor(Math.random() * 3000) + 500;

    data.push({
      name: months[i],
      "Montant Bordereau": randomBordereau,
      "Montant relevé": randomReleve,
    });
  }

  return data;
};

const data = generateRandomData();

<style jsx>{`
  .recharts-symbols path {
    border-radius: 5px; /* Vous pouvez ajuster la valeur de border-radius selon votre préférence */
  }
`}</style>;

const customTick = ({ x, y, payload }: { x: any; y: any; payload: any }) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="#666"
      fontSize="10px"
      fontFamily="DM Sans"
      fontWeight="400"
      dy={16}
    >
      {payload.value}
    </text>
  );
};

const Barchart1 = () => {
  return (
    <BarChart width={810} height={600} data={data}>
      <XAxis
        dataKey="name"
        tick={customTick}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        contentStyle={{
          fontSize: "10px",
          lineHeight: "15px",
        }}
      />
      <Legend
        wrapperStyle={{
          fontSize: "10px",
          marginTop: "-15px",
        }}
        verticalAlign="top"
        iconType="square"
        className="mr-7 "
      />
      <Bar
        dataKey="Montant Bordereau"
        fill="#58969E"
        radius={[10, 10, 0, 0]}
        barSize={10}
      />
      <Bar
        dataKey="Montant relevé"
        fill="#8FC816"
        radius={[10, 10, 0, 0]}
        barSize={10}
      />
    </BarChart>
  );
};

export default Barchart1;

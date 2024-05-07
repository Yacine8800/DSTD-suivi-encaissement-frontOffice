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

interface LegendEntry {
  color: string;
  value: string;
}

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 15,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        overflowX: "auto",
        marginLeft: 22,
      }}
    >
      {payload.map((entry: LegendEntry, index: number) => (
        <li
          key={`item-${index}`}
          style={{ display: "flex", alignItems: "center", marginRight: 80 }}
        >
          <svg width="10" height="10" style={{ marginRight: 5 }}>
            <rect width="10" height="10" rx="5" ry="5" fill={entry.color} />
          </svg>
          <span style={{ fontSize: "14px" }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const Barchart1 = () => {
  return (
    <BarChart width={852} height={560} data={data} barCategoryGap={2}>
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
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "4px",
          padding: "10px",
        }}
      />
      <Legend
        content={renderLegend}
        verticalAlign="top"
        wrapperStyle={{
          fontSize: "15px",
          fontFamily: "Open Sans",
          justifyContent: "start",
          fontWeight: "600",
          lineHeight: "20px",
        }}
      />
      <Bar
        dataKey="Montant Bordereau"
        fill="#58969E"
        radius={[10, 10, 10, 10]}
        barSize={12}
      />
      <Bar
        dataKey="Montant relevé"
        fill="#8FC816"
        radius={[10, 10, 10, 10]}
        barSize={12}
      />
    </BarChart>
  );
};

export default Barchart1;

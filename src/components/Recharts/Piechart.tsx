"use client";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [{ name: "Chèques", value: 400 }];
const COLORS = ["#2F3780", "#DEE1FF"];
const COLORS2 = ["#009640", "#35915d"];

interface LegendEntry {
  color: string;
  value: string;
}

const Piechart = () => {
  const legendData = data.map((entry, index) => ({
    color: COLORS[index % COLORS.length],
    value: entry.name,
  }));

  return (
    <div className="flex justify-center">
      <p className="">Ratio des modes de paiement</p>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={90}
          cy={100}
          innerRadius={50}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          payload={legendData}
          color="black"
          wrapperStyle={{ paddingLeft: "-80px", color: "black" }}
        />
      </PieChart>
    </div>
  );
};

export default Piechart;

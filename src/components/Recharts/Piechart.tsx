"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Chèques", value: 400 },
  { name: "Cartes", value: 600 },
];
const COLORS = ["#2F3780", "#DEE1FF"];

// Fonction pour calculer le pourcentage total
const sumValues = data.reduce((acc, current) => acc + current.value, 0);

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ position: "relative", width: "100%", height: 400 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius={80}
            outerRadius={95}
            fill="#8884d8"
            dataKey="value"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#DEE1FF"
              dominantBaseline="middle"
            >
              {`${sumValues.toFixed(0)}`}
            </text>
          </Pie>
          <circle cx="50%" cy="50%" r="40" fill="#DEE1FF" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;

import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Chart as ChartJS, ArcElement, Tooltip as tt, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, tt);

const data_pie = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data = [
  {
    name: "January",
    Iphone: 4000,
  },
  {
    name: "March",
    Iphone: 1000,
  },
  {
    name: "May",
    Iphone: 4000,
  },
  {
    name: "July",
    Iphone: 800,
  },
  {
    name: "October",
    Iphone: 1500,
  },
];

export const LineChart_ = () => {
  return (
    <ResponsiveContainer aspect={6} className="activities">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal="true" vertical="" stroke="#808080" />
        <XAxis dataKey="name" tick={{ fill: "#808080" }} />
        <YAxis tick={{ fill: "#808080" }} />
        {/* <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={false}
            />       */}
        <Line
          type="monotone"
          dataKey="Iphone"
          stroke="#8884d8"
          strokeWidth="3"
          dot={{
            fill: "#2e4355",
            stroke: "#8884d8",
            strokeWidth: 1,
            r: 5,
          }}
          activeDot={{
            fill: "#2e4355",
            stroke: "#8884d8",
            strokeWidth: 3,
            r: 10,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const PieChart = () => {
  return <Pie data={data_pie} />;
};

import React from "react";
import Tabs from "../../components/Tabs";

import "./Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Chart as ChartJS, ArcElement, Tooltip as tt, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import BlackMenu from "../../components/BlackMenu";
import Navigation from "../../components/Navigation";
import { LineChart_ } from "../../components/Charts";

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

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="black-partition">
        <div className="black-content">
          <h1 className="black-title">Board.</h1>
          <BlackMenu />
        </div>
      </div>
      <div className="white-partition">
        <div className="dashboard-header">
          <Navigation />
          <div className="tabs">TABS</div>
        </div>
        <div className="activities-main">
          <div className="activities-nav">
            <h3>Activities</h3>
          </div>
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
        </div>

        <div className="stats">
          <div className="top-products">
            <h3 className="title">Top Products</h3>
            <div className="chart">
              <div className="pie-chart">
                <Pie data={data_pie} />
              </div>

              <div className="legend">
                <div className="leg-item">Basic tees</div>
                <div className="leg-item">Custom Short Pants</div>
                <div className="leg-item">Super Hoodies</div>
              </div>
            </div>
          </div>
          <div className="schedule">
            <h3 className="title">Schedules</h3>
            <div className="schedules">
              <div className="sche-sec">
                <div className="ver-line"></div>
                <div>
                  <h6 className="sche-title">
                    Meeting with the suppliers from Kuta
                  </h6>
                  <h6 className="sche-time">14:00 - 15:00</h6>
                  <h6 className="sche-loc">at Sunset Road</h6>
                </div>
              </div>
              <div className="sche-sec">
                <div className="ver-line green"></div>
                <div>
                  <h6 className="sche-title">
                    Meeting with the suppliers from Kuta
                  </h6>
                  <h6 className="sche-time">14:00 - 15:00</h6>
                  <h6 className="sche-loc">at Sunset Road</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

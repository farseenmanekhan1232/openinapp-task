import React from "react";
import { PieChart } from "./Charts";

const TopProducts = () => (
  <div className="top-products">
    <h3 className="title">Top Products</h3>
    <div className="chart">
      <div className="pie-chart">
        <PieChart />
      </div>

      <div className="legend">
        <div className="leg-item">Basic tees</div>
        <div className="leg-item">Custom Short Pants</div>
        <div className="leg-item">Super Hoodies</div>
      </div>
    </div>
  </div>
);

export default TopProducts;

import React from "react";

import BlackMenu from "../../components/BlackMenu";
import Navigation from "../../components/Navigation";
import { LineChart_ } from "../../components/Charts";
import Tab from "../../components/Tab";
import Schedules from "../../components/Schedules";
import TopProducts from "../../components/TopProducts";

import "./Dashboard.css";

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
          <div className="tabs">
            <Tab icon_name={""} tab_name={"revenue"}></Tab>
            <Tab icon_name={""} tab_name={"transactions"}></Tab>
            <Tab icon_name={""} tab_name={"likes"}></Tab>
            <Tab icon_name={""} tab_name={"users"}></Tab>
          </div>
        </div>
        <div className="activities-main">
          <div className="activities-nav">
            <h3>Activities</h3>
          </div>
          <LineChart_ />
        </div>
        <div className="stats">
          <TopProducts />
          <Schedules />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

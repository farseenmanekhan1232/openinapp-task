import React from "react";

import BlackMenu from "../../components/BlackMenu";
import Navigation from "../../components/Navigation";
import { LineChart_ } from "../../components/Charts";
import Tab from "../../components/Tab";
import Schedules from "../../components/Schedules";
import TopProducts from "../../components/TopProducts";
import { TbCashBanknote } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

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
            <Tab
              icon_name={<TbCashBanknote className="tab-icon" />}
              tab_name={"revenue"}
            >
              <div className="tab-content">
                <h5>Total Revenue</h5>
                <h3>$2,129,430</h3>
              </div>
            </Tab>
            <Tab
              icon_name={<BsTags className="tab-icon" />}
              tab_name={"transactions"}
            >
              <div className="tab-content">
                <h5>Total Transactions</h5>
                <h3>1,520</h3>
              </div>
            </Tab>
            <Tab
              icon_name={<FiUsers className="tab-icon" />}
              tab_name={"likes"}
            >
              {" "}
              <div className="tab-content">
                <h5>Total Likes</h5>
                <h3>9,721</h3>
              </div>
            </Tab>
            <Tab
              icon_name={<AiOutlineLike className="tab-icon" />}
              tab_name={"users"}
            >
              <div className="tab-content">
                <h5>Total Users</h5>
                <h3>892</h3>
              </div>
            </Tab>
          </div>
        </div>
        <div className="activities-main">
          <div className="activities-nav">
            <h3>Activities</h3>
            <div className="legend">
              <div className="legend-item">
                <div className="circle green"></div>
                <h5>Guest</h5>
              </div>

              <div className="legend-item">
                <div className="circle pink"></div>
                <h5>User</h5>
              </div>
            </div>
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

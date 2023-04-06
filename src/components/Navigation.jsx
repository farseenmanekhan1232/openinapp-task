import React from "react";
import profile from "../assets/profile.png";
import { BiBell } from "react-icons/bi";

const Navigation = () => (
  <nav className="navigation">
    <h2>Dashboard</h2>
    <div className="to-right">
      <div>
        <BiBell />
      </div>
      <div>
        <img src={profile} className="profile-pic" alt="" />
      </div>
    </div>
  </nav>
);

export default Navigation;

import React from "react";
import BlackMenuItem from "./BlackMenuItem";

import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const BlackMenu = () => (
  <div className="black-menu">
    <BlackMenuItem content="Dashboard" icon_name={AiOutlinePieChart} />
    {/* <BlackMenuItem />
    <BlackMenuItem />
    <BlackMenuItem /> */}
  </div>
);

export default BlackMenu;

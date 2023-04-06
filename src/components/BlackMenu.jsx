import React from "react";
import BlackMenuItem from "./BlackMenuItem";

import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const BlackMenu = () => (
  <div className="black-menu">
    <BlackMenuItem
      content="Dashboard"
      icon_name={<AiOutlinePieChart className="black-icon" />}
    />
    <BlackMenuItem
      content="Transactions"
      icon_name={<BsTags className="black-icon" />}
    />
    <BlackMenuItem
      content="Schedules"
      icon_name={<AiOutlinePieChart className="black-icon" />}
    />
    <BlackMenuItem
      content="Users"
      icon_name={<BiUserCircle className="black-icon" />}
    />
    <BlackMenuItem
      content="Settings"
      icon_name={<AiOutlineSetting className="black-icon" />}
    />
  </div>
);

export default BlackMenu;

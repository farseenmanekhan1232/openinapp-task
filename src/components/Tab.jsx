import React from "react";

export const Tab = ({ children, icon_name, tab_name }) => (
  <div className={`tab ${tab_name}`}>
    <div className="tab-icon-wrap">
      {icon_name className="tab-icon" }
    </div>
    {children}
  </div>
);

export default Tab;

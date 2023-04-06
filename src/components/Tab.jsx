import React from "react";

export const Tab = ({ content, icon_name, tab_name }) => (
  <div className={`tab ${tab_name}`}>
    <div className="tab-icon-wrap">
      <icon_name className="tab-icon" />
    </div>
    {content}
  </div>
);

export default Tab;

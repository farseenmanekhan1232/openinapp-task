import React from "react";

export const Tabs = ({ content, icon_name }) => (
  <div className="tab revenue">
    <div className="tab-icon-wrap">
      <icon_name className="tab-icon" />
    </div>
    {content}
  </div>
);

export default Tabs;

import React from "react";
const BlackMenuItem = ({ content, icon_name }) => (
  <div className="black-menu-item">
    {icon_name}
    <div>{content}</div>
  </div>
);

export default BlackMenuItem;

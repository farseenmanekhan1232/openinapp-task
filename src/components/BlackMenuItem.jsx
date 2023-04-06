import React from "react";
const BlackMenuItem = ({ content, icon_name }) => (
  <div className="black-menu-item">
    <icon_name className="black-icon" />
    <div>{content}</div>
  </div>
);

export default BlackMenuItem;

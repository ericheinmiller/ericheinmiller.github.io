import React, { useEffect } from "react";
import "./Sidebar-Filter-Options.css";

export default (props) => {
  const filterContainerColors = [
    "#2bdab1",
    "#f7776a",
    "#58abf7",
    "#ffce4b",
    "#9e5bba",
    "#ca817a",
  ];
  return (
    <h2
      style={{ backgroundColor: filterContainerColors[props.color] }}
      className="sidebar-filter-option"
    >
      {props.name}
    </h2>
  );
};

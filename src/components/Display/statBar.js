import React from "react";

export default function StatBar({ stat }) {
  const value = stat.base_stat;
  const color =
    stat.base_stat > 75 ? "green" : stat.base_stat > 55 ? "orange" : "red";
  let statName = stat.stat.name.split("-");
  if (statName.length > 1) {
    statName = `${statName[0][0].toUpperCase()}${statName[0].slice(
      1
    )} ${statName[1][0].toUpperCase()}`;
  } else {
    statName = `${statName[0][0].toUpperCase()}${statName[0].slice(1)}`;
  }
  return (
    <div className="statBar">
      <div className="statBar-labels">
        <p>{statName}:</p>
        <h5>{value}</h5>
      </div>
      <div className="statBar-line">
        <div
          className="statBar-fill"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

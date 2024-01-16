import React, { useEffect, useState } from "react";
import StatBar from "./statBar";
import "./Display.css";

export default function Display({ selectedPokemon }) {
  const [show, setShow] = useState(null);
  useEffect(() => {
    if (selectedPokemon?.name) setShow(null);
    setTimeout(() => {
      setShow("wrapper");
    }, 100);
  }, [selectedPokemon]);

  if (selectedPokemon) {
    return (
      <div className={`display ${selectedPokemon.types[0].type.name}`}>
        <div className="container">
          <div className="infoBar">
            <div className="title">
              <div>{`${selectedPokemon.name[0].toUpperCase()}${selectedPokemon.name.slice(
                1
              )}`}</div>
              <div className={`pkID ${selectedPokemon.types[0].type.name}Two`}>
                {selectedPokemon.id}
              </div>
            </div>
            <div className="poki-typings-container-display">
              {selectedPokemon.types.map((type) => {
                return (
                  <li
                    key={`${selectedPokemon.id}-${selectedPokemon.name}-${type.type.name}`}
                    className={`poki-typing-display ${selectedPokemon.types[0].type.name}Three`}
                  >
                    {type.type.name}
                  </li>
                );
              })}
            </div>
          </div>
          <div className="poki-image-container-display">
            <img alt="poki" src={selectedPokemon.sprites.front_default} />
          </div>
        </div>
        <div className={`paper ${show}`}>
          <div className="stats-container">
            {selectedPokemon.stats.map((stat) => (
              <StatBar stat={stat} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div className="display">None Selected</div>;
}

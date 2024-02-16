import React, { useEffect, useState } from "react";
import "./Random-Displayed-Pokemon.css";

export default function RandomDisplayedPokemon({ pokiArray }) {
  const [displayedPokimon, setDisplayedPokimon] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      let temp = Math.floor(Math.random() * 151);
      if (temp === 0) {
        temp = 1;
      }
      setDisplayedPokimon(pokiArray[temp].sprites.front_default);
    }, 5000);

    return () => clearInterval(interval);
  }, [displayedPokimon, pokiArray]);

  if (!pokiArray) return;

  return (
    <div className="random-displayed-pokemon-container">
      <img alt="POKEMON HERE" src={displayedPokimon}></img>
    </div>
  );
}

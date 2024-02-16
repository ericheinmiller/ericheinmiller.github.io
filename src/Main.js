import React from "react";
import "./Main.css";

//components
import PokiCard from "./components/PokiCard/PokiCard";

export default ({ filteredPokiArray, setSelectedPokemon }) => {
  const handleOnClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  return (
    <div className="main-container">
      <div className="results-container">
        {filteredPokiArray.map((pokemon) => (
          <PokiCard
            handleOnClick={handleOnClick}
            pokemon={pokemon}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
};

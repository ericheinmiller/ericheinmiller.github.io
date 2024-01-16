import React from "react";
import "./Sidebar.css";

//image imports
import magnifyingGlassIcon from "./assets/images/sidebar-searchbar-icon.png";

//components
import FilterOption from "./components/Sidebar-Filter-Options/Sidebar-Filter-Options";
import RandomDisplayedPokemon from "./components/Random-Displayed-Pokemon/Random-Displayed-Pokemon";

export default function Sidebar({ pokiArray, handleInput, setShowModal }) {
  return (
    <div className="sidebar-container">
      {/* should disappear once logged in / have sign out options once logged in too */}
      <div className="login-container">
        <div className="login-upper">
          <span>Sign up and save your favorites!</span>
          <button onClick={() => setShowModal(true)}>Sign Up</button>
        </div>
        <div className="login-lower">
          <span>Already a member?</span>
          <button>Log In</button>
        </div>
      </div>

      <div className="sidebar-searchbar-container">
        <h1>
          What Pokémon
          <br /> are you looking for?
        </h1>
        <div className="searchbar">
          <img alt="search" src={magnifyingGlassIcon}></img>
          <input
            placeholder="Search Pokémon, Moves, Abilities, etc"
            onChange={(e) => handleInput(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="sidebar-filters-container">
        <div className="sidebar-filter-row">
          <FilterOption color={0} name={"Pokedex"} />
          <FilterOption color={1} name={"Moves"} />
        </div>
        <div className="sidebar-filter-row">
          <FilterOption color={2} name={"Abilities"} />
          <FilterOption color={3} name={"Items"} />
        </div>
        <div className="sidebar-filter-row">
          <FilterOption color={4} name={"Locations"} />
          <FilterOption color={5} name={"Type Charts"} />
        </div>
      </div>
      <RandomDisplayedPokemon pokiArray={pokiArray} />
    </div>
  );
}

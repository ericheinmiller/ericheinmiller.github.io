import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min.js";

import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import UserFavorites from "./UserFavorites.js";
import Display from "./components/Display/Display.js";
import Modal from "./components/Modal/Modal.js";
import "./App.css";

function App() {
  //held states
  const [pokiArray, setPokiArray] = useState([]);
  const [filteredPokiArray, setFilteredPokiArray] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [timer, setTimer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const element = useRef();

  async function fetchKantoPokemon() {
    const pokemonArray = await fetch(
      //limited to the first 151
      "https://pokeapi.co/api/v2/pokemon?limit=151" 
    )
      .then((response) => response.json())
      .then((allpokemon) => {
        return [...allpokemon.results];
      });
    Promise.all(
      pokemonArray.map((pokemon) => {
        let url = pokemon.url;
        return fetch(url)
          .then((response) => response.json())
          .then((pokeData) => {
            return { ...pokemon, ...pokeData };
          });
      })
    ).then((results) => {
      setPokiArray(results);
      setFilteredPokiArray(results);
    });
  }

  //currently only finds exact matches, should change that **eventually**
  const handleInput = (query) => {
    if (timer) {
      clearTimeout(timer);
    }
    // will only query after 1 second has passed since typing
    setTimer(
      setTimeout(() => {
        setFilteredPokiArray(
          pokiArray.filter((pokemon) => {
            const pokemonName = pokemon.name.toUpperCase();
            const queryName = query.toUpperCase();
            if (pokemonName.includes(queryName)) {
              return {
                name: pokemon.name,
              };
            }
          })
        );
      }, 1000)
    );
  };

  //starts the nonsense
  useEffect(() => {
    fetchKantoPokemon();
  }, []);

  return (
    <div className="App">
      <Sidebar
        pokiArray={pokiArray}
        handleInput={handleInput}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main
              filteredPokiArray={filteredPokiArray}
              setSelectedPokemon={setSelectedPokemon}
            />
          </Route>
          {/* user should be dynamic id */}
          <Route path="/user/fav">
            <UserFavorites />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      <Display selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default App;

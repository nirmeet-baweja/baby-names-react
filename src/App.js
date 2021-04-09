import React, { useState } from "react";
import Search from "./components/Search";
import GenderFilter from "./GenderFilter";
import Favourites from "./components/Favourites";
import BabyNamesContainer from "./components/BabyNamesContainer";

import BabyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [namesList, setNamesList] = useState(BabyNamesData);

  return (
    <div className="App">
      <header className="App-header">Baby Names</header>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <GenderFilter namesList={namesList} setNamesList={setNamesList} />

      <Favourites
        namesList={namesList}
        favourites={favourites}
        setFavourites={setFavourites}
      />

      <BabyNamesContainer
        namesList={namesList}
        searchValue={searchValue}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
}

export default App;

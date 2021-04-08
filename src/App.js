import React, { useState } from "react";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import BabyNamesContainer from "./components/BabyNamesContainer";

import BabyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="App">
      <header className="App-header">Baby Names</header>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Favourites
        namesList={BabyNamesData}
        favourites={favourites}
        setFavourites={setFavourites}
      />
      <BabyNamesContainer
        namesList={BabyNamesData}
        searchValue={searchValue}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
}

export default App;

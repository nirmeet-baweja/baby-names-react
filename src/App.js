import React, { useState } from "react";
import Search from "./components/Search";
import BabyNamesContainer from "./components/BabyNamesContainer";

import BabyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">Baby Names</header>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <BabyNamesContainer namesList={BabyNamesData} searchValue={searchValue} />
    </div>
  );
}

export default App;

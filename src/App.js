import React from "react";
import BabyName from "./BabyName";
import BabyNamesData from "./data/babyNamesData.json";

import "./App.css";

function App() {
  console.log(BabyNamesData[0]);
  return (
    <div className="App">
      <header className="App-header">Baby Names</header>
      {BabyNamesData.map((name) => (
        <BabyName babyName={name} />
      ))}
    </div>
  );
}

export default App;

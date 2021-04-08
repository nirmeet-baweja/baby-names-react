import React from "react";
// import BabyName from "./BabyName";
import NameList from "./NameList";

const BabyNamesContainer = ({
  namesList,
  searchValue,
  favourites,
  setFavourites,
}) => {
  const filteredNames = namesList
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((entry) => !favourites.includes(entry.id));

  const addToFavourites = (id) => {
    setFavourites([...favourites, id]);
  };

  return (
    <div className="allBabyNames">
      <NameList nameList={filteredNames} onItemClick={addToFavourites} />
    </div>
  );
};

export default BabyNamesContainer;

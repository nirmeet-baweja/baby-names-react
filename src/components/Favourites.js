import React from "react";
import NameList from "./NameList";

const Favourites = ({ namesList, favourites, setFavourites }) => {
  const favouriteNames = namesList.filter((nameEntry) =>
    favourites.includes(nameEntry.id)
  );

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((value) => value !== id));
  };
  return (
    <div className="favourites">
      <h1>Favourites : </h1>
      <NameList nameList={favouriteNames} onItemClick={removeFromFavourites} />
      <hr className="sectionDivide" />
    </div>
  );
};

export default Favourites;

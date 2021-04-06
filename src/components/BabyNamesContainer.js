import React from "react";
import BabyName from "./BabyName";

const BabyNamesContainer = ({ namesList, searchValue }) => {
  const filteredNames = namesList.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="allBabyNames">
      {filteredNames.map((name) => (
        <BabyName babyName={name} key={name.id} />
      ))}
    </div>
  );
};

export default BabyNamesContainer;

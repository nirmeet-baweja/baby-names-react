import React from "react";

const BabyName = ({ nameEntry, onItemClick }) => {
  let cssClass = "";
  nameEntry.sex === "f" ? (cssClass = "female") : (cssClass = "male");
  return (
    <button
      className={cssClass + " name"}
      key={nameEntry.id}
      onClick={() => {
        onItemClick(nameEntry.id);
      }}
    >
      {nameEntry.name}
    </button>
  );
};

export default BabyName;

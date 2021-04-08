import React from "react";
import BabyName from "./BabyName";

const NameList = ({ nameList, onItemClick }) => {
  return (
    <>
      {nameList.map((nameEntry) => (
        <BabyName
          nameEntry={nameEntry}
          onItemClick={onItemClick}
          key={nameEntry.id}
        />
      ))}
    </>
  );
};

export default NameList;

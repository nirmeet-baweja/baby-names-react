import React from "react";

const BabyName = ({ babyName }) => {
  let cssClass = "";
  babyName.sex === "f" ? (cssClass = "female") : (cssClass = "male");
  return <span className={cssClass + " name"}>{babyName.name}</span>;
};

export default BabyName;

import React from "react";
// import BabyNamesData from "./data/babyNamesData.json";

const BabyName = (props) => {
  let cssClass = "";
  props.babyName.sex === "f" ? (cssClass = "female") : (cssClass = "male");
  return <span className={cssClass + " name"}>{props.babyName.name}</span>;
};

export default BabyName;

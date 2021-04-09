import React from "react";
import BabyNamesData from "./data/babyNamesData.json";

const GenderFilter = ({ gender, setGender, namesList, setNamesList }) => {
  const handleGenderChange = (event) => {
    console.log("handleGender");
    console.log(event.target.value);

    setGender(event.target.value);
    console.log(gender);

    const genderFilteredNames = BabyNamesData.filter((nameEntry) => {
      if (event.target.value === nameEntry.sex) return nameEntry;
      else if (event.target.value === "all") return nameEntry;
    });

    setNamesList(genderFilteredNames);
    console.log(namesList);
  };

  return (
    <form className="genderFilter">
      <input
        type="radio"
        id="male"
        name="gender"
        value="m"
        onClick={handleGenderChange}
      />
      <label htmlFor="m">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="f"
        onClick={handleGenderChange}
      />
      <label htmlFor="f">Female</label>
      <input
        type="radio"
        id="all"
        name="gender"
        value="all"
        onClick={handleGenderChange}
      />
      <label htmlFor="all">All</label>
    </form>
  );
};

export default GenderFilter;

import React from "react";
import BabyNamesData from "./data/babyNamesData.json";

const GenderFilter = ({ setNamesList }) => {
  const handleGenderChange = (event) => {
    const genderFilteredNames = BabyNamesData.filter((nameEntry) =>
      event.target.value === nameEntry.sex || event.target.value === "all"
        ? nameEntry
        : false
    );

    setNamesList(genderFilteredNames);
  };

  return (
    <form className="genderFilter">
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="m"
          onClick={handleGenderChange}
        />
        <label htmlFor="m">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="f"
          onClick={handleGenderChange}
        />
        <label htmlFor="f">Female</label>
      </div>
      <div>
        <input
          type="radio"
          id="all"
          name="gender"
          value="all"
          onClick={handleGenderChange}
        />
        <label htmlFor="all">All</label>
      </div>
    </form>
  );
};

export default GenderFilter;

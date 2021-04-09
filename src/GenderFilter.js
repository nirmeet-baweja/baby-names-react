import React from "react";
import BabyNamesData from "./data/babyNamesData.json";

const GenderFilter = ({ namesList, setNamesList }) => {
  const handleGenderChange = (event) => {
    const genderFilteredNames = BabyNamesData.filter((nameEntry) => {
      if (event.target.value === nameEntry.sex) return nameEntry;
      else if (event.target.value === "all") return nameEntry;
    });

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

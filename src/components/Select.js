import React from "react";

const Select = ({ handleSelected }) => {
  return (
    <select onChange={handleSelected} defaultValue={"DEFAULT"}>
      <option disabled defaultValue={"DEFAULT"} hidden>
        Show all categories
      </option>
      <option value="DEFAULT">All</option>
      <option value="Food Appels">Food Appels</option>
      <option value="Home Appels">Home Appels</option>
    </select>
  );
};

export default Select;

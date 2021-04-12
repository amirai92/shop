import React from "react";

const Select = ({ handleSelected, value }) => {
  return (
    <div>
      <div className="flex justify-center mt-4 mx-auto relative w-11/12 object-center">
        <select
          value={value}
          onChange={handleSelected}
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option disabled defaultValue={"All"} hidden>
            Show all categories
          </option>
          <option value="All">Show all categories</option>
          <option value="Food Appels">Food Appels</option>
          <option value="Home Appels">Home Appels</option>
          <option value="Computer Accessories">Computer Accessories</option>
        </select>
      </div>
    </div>
  );
};

export default Select;

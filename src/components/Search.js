import React from "react";
const Search = ({ handleKeyword, keyword }) => {
  return (
    <>
      <div className="mt-2 mx-auto flex justify-center border block rounded shadow-sm w-11/12 ">
        <div className="absolute inset-y-0 left-0 pl-3  pointer-events-none"></div>
        <input
          type="search"
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search.."
          onChange={handleKeyword}
          value={keyword}
        />
      </div>
    </>
  );
};

export default Search;

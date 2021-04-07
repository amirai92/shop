import React from "react";

const Search = ({ handleKeyword }) => {
  console.log(handleKeyword);
  return <input placeholder="Search.." onChange={handleKeyword}></input>;
};

export default Search;

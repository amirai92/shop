import React from "react";
import { Form } from "react-bootstrap";
import "./styles.css";
const Search = ({ handleKeyword }) => {
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search..."
        onChange={handleKeyword}
      />
      <Form.Text className="text-muted"></Form.Text>
    </>
  );
};

export default Search;

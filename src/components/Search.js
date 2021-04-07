import React from "react";
import { Form } from "react-bootstrap";
import "./styles.css";
const Search = ({ handleKeyword, keyword }) => {
  return (
    <>
      <p>
        <Form.Control
          type="search"
          placeholder="Search..."
          onChange={handleKeyword}
          value={keyword}
        />
        <Form.Text className="text-muted"></Form.Text>
      </p>
    </>
  );
};

export default Search;

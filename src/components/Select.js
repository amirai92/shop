import React from "react";
import { Form } from "react-bootstrap";
import "./styles.css";

const Select = ({ handleSelected }) => {
    return (
      <>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control onChange={handleSelected} as="select">
            <option disabled defaultValue={"DEFAULT"} hidden>
                Show all categories
            </option>
            <option value="All">All Categories</option>
            <option value="Food Appels">Food Appels</option>
            <option value="Home Appels">Home Appels</option>
            <option value="Computer Accessories">Computer Accessories</option>
            </Form.Control>
        </Form.Group>
      </>
    );
  };
  

export default Select;
// <select onChange={handleSelected} defaultValue={"DEFAULT"}>
//   <option disabled defaultValue={"DEFAULT"} hidden>
//     Show all categories
//   </option>
//   <option value="DEFAULT">All</option>
//   <option value="Food Appels">Food Appels</option>
//   <option value="Home Appels">Home Appels</option>
// </select>;

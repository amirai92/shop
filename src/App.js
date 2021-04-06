import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div className="App">
      <header>
        <a href="/">Shopping List</a>
      </header>
      <main>
        <select>
          <option disabled selected hidden>
            Show all categories
          </option>
          <option>Food Appels</option>
          <option>Home Appels</option>
          <option></option>
        </select>
        <br></br>
        <input placeholder="Search.."></input>
        <Products products={products}></Products>
        <div>Cart List</div>
      </main>
      <footer>All rights is reserved to Amir Aizin</footer>
    </div>
  );
};

export default App;

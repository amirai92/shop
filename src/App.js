import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Select from "./components/Select";
import Search from "./components/Search";
import List from "./components/List";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setProducts(data);
  }, []);

  const handleSelected = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const buyItem = (id) => {
    let newData = products;
    newData = newData.map((obj) => {
      if (obj._id === id) obj.amount = obj.amount + 1;
      return obj;
    });
    setProducts(newData);
  };

  const deleteItem = (id) => {
    let newData = products;
    newData = newData.map((obj) => {
      if (obj._id === id) obj.amount = obj.amount - 1;
      return obj;
    });
    setProducts(newData);
  };

  const handleReset = () => {
    setProducts(data);
    setSelectedCategory("All");
    setKeyword("");
  };

  const handleDone = () => {
    let newData = products;
    console.log(
      "You have bought this items:",
      newData.map((obj) => {
        if (obj.amount > 0) return obj.name;
        else {
          return null;
        }
      })
    );
    // alert("We hope you enjoy shopping in our site");
  };

  return (
    <div className="App">
      <header>
        <a href="/">Shopping list</a>
      </header>
      <main>
        <Select handleSelected={handleSelected} />
        <Search handleKeyword={handleKeyword} />
        <Products
          keyword={keyword}
          products={products}
          selectedCategory={selectedCategory}
          buyItem={buyItem}
        ></Products>
        <List products={products} deleteItem={deleteItem} />
        <button onClick={handleReset}>Start Over</button>
        <button onClick={handleDone}>Done</button>
      </main>
      <footer>All rights is reserved to Amir Aizin</footer>
    </div>
  );
};

export default App;

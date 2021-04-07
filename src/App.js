import React, { useState } from "react";
import "./App.css";
import data from "./utills/data.json";
import Products from "./components/Products";
import Select from "./components/Select";
import Search from "./components/Search";
import List from "./components/List";
import Actions from "./components/Actions";
import { Card } from "react-bootstrap";
import "./components/styles.css";

const App = () => {
  const [products, setProducts] = useState(JSON.parse(JSON.stringify(data)));
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keyword, setKeyword] = useState("");

  const handleSelected = (event) => setSelectedCategory(event.target.value);
  const handleKeyword = (event) => setKeyword(event.target.value);

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
    setProducts(JSON.parse(JSON.stringify(data)));
    setSelectedCategory("All");
    setKeyword("");
  };

  const handleDone = () => {
    console.log(
      "You have bought this items : ",
      products
        .filter((p) => p?.amount !== 0)
        .map((a) => `${a?.name} X ${a?.amount}`)
        .join(" ")
    );
  };

  const getPurchasedProductsAmount = () =>
    products.reduce((a, b) => a + (b["amount"] || 0), 0);

  return (
    <Card style={{ position: "relative" }}>
      <Card.Header as="h1">Shopping List </Card.Header>
      <main>
        <div className="top-actions">
          <Select className="select-action" handleSelected={handleSelected} />
          <Search handleKeyword={handleKeyword} keyword={keyword} />
        </div>
        <Products
          keyword={keyword}
          products={products}
          selectedCategory={selectedCategory}
          buyItem={buyItem}
        ></Products>
        <div className="bottom-section">
          <hr></hr>
          <List products={products} deleteItem={deleteItem} />
          <hr id="divider"></hr>
          <Actions
            handleReset={handleReset}
            keyword={keyword}
            handleDone={handleDone}
            getPurchasedProductsAmount={getPurchasedProductsAmount}
          />
        </div>
      </main>
    </Card>
  );
};

export default App;

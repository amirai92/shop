import React, { useState } from "react";
import data from "./utills/data";
import Select from "./components/Select";
import Search from "./components/Search";
import Actions from "./components/Actions";
import List from "./components/List";
import Products from "./components/Products";

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
    <>
      <div className="container mx-auto border rounded w-1/4 h-full	mt-2">
        <p className="text-2xl py-4 px-6 bg-gray-100 h-16 ">Shopping list</p>
        <Select handleSelected={handleSelected} value={selectedCategory} />
        <Search handleKeyword={handleKeyword} keyword={keyword} />
        <Products
          keyword={keyword}
          products={products}
          selectedCategory={selectedCategory}
          buyItem={buyItem}
        ></Products>
        <div className="bg-gray-100 ">
          <hr></hr>
          <List products={products} deleteItem={deleteItem} />
          <hr className="flex flex-wrap content-center w-5/6 ml-10 mt-4"></hr>
          <Actions
            handleReset={handleReset}
            keyword={keyword}
            handleDone={handleDone}
            getPurchasedProductsAmount={getPurchasedProductsAmount}
          />
        </div>
      </div>
    </>
  );
};

export default App;

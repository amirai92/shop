import React from "react";
import "./styles.css";

const Products = (props) => {
  const { products, selectedCategory, keyword, buyItem } = props;

  const getFilteredProducts = () =>
    products
      .filter((p) => p.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter(
        (p) => p.category === selectedCategory || selectedCategory === "All"
      );

  return (
    <div>
      <ul>
        {getFilteredProducts().length === 0
          ? `${keyword} cannot be found`
          : getFilteredProducts().map((product) => (
              <li key={product._id}>
                <div>
                  <img
                    onClick={() => buyItem(product._id)}
                    className="applePhoto"
                    src={product.image}
                    alt={product.description}
                  ></img>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Products;

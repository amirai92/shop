import React from "react";
import "./styles.css";

const Products = (props) => {
  const { products } = props;
  console.log("Product Comp", products);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <a href={"#" + product._id}>
                <img
                  className="applePhoto"
                  src={product.image}
                  alt={product.description}
                ></img>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

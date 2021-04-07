import React from "react";
import "./styles.css";

const List = ({ products, deleteItem }) => {
  return (
    <ul>
      List
      {products
        .filter((p) => p.amount !== 0)
        .map((p) => (
          <li key={p._id}>
            <button
              onClick={() => deleteItem(p._id)}
            >{`x${p.amount} ${p.name}`}</button>
          </li>
        ))}
    </ul>
  );
};

export default List;

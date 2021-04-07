import { Button } from "react-bootstrap";
import React from "react";
import "./styles.css";

const List = ({ products, deleteItem }) => {
  const getFilteredProducts = () => products.filter((p) => p.amount !== 0);

  return (
    <>
      <p className="title" style={{ marginLeft: "25px" }}>
        Customer List:
      </p>
      {getFilteredProducts().length !== 0 ? (
        getFilteredProducts().map((p) => (
          <Button
            key={p._id}
            variant={"warning"}
            style={{ margin: "25px" }}
            onClick={() => deleteItem(p._id)}
          >{`x${p.amount} ${p.name}`}</Button>
        ))
      ) : (
        <h5> Your cart is empty</h5>
      )}
    </>
  );
};

export default List;

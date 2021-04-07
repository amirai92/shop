import React from "react";
import { Button } from "react-bootstrap";

const Actions = ({ getPurchasedProductsAmount, handleDone, handleReset }) => {
  return (
    <section className="end-action-buttons">
      <Button variant="danger" onClick={handleReset} id="start-over">
        Start Over
      </Button>
      <Button
        variant="outline-success"
        onClick={handleDone}
        disabled={!getPurchasedProductsAmount()}
      >
        Done
      </Button>
    </section>
  );
};

export default Actions;

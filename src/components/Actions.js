import React from "react";

const Actions = ({ getPurchasedProductsAmount, handleDone, handleReset }) => {
  return (
    <section className="mt-4 flex justify-end p-4">
      <button
        onClick={handleReset}
        className="mr-4 bg-white hover:bg-gray-100 text-gray-800 border-gray-100 py-1 px-2  border-gray-700 rounded shadow"
      >
        Start Over
      </button>
      <button
        onClick={handleDone}
        disabled={!getPurchasedProductsAmount()}
        className="mr-4 bg-blue-400 text-white py-1 px-2  border-blue-700 rounded shadow"
      >
        Done
      </button>
    </section>
  );
};

export default Actions;

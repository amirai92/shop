import React from "react";

const Products = (props) => {
  const { products, selectedCategory, keyword, buyItem } = props;
  const getFilteredProducts = () =>
    products
      .filter((p) => p?.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter(
        (p) => p?.category === selectedCategory || selectedCategory === "All"
      );

  let notFound = `${keyword} Cannot be found, please try agian.`;

  return (
    <div className="container mx-auto p-3 text-center">
      {getFilteredProducts().length === 0 || undefined ? (
        <b className="text-center mb-4 mt-4">{notFound}</b>
      ) : (
        <ul className="grid grid-cols-4 gap-6 mb-4 mt-6">
          {getFilteredProducts().map((product) => (
            <li key={product._id} className="border flex">
              <button>
                <img
                  src={product?.image}
                  alt={product?.description}
                  onClick={() => {
                    buyItem(product?._id);
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;

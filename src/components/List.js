import React from "react";

const List = ({ products, deleteItem }) => {
  const getFilteredProducts = () => products.filter((p) => p?.amount !== 0);

  return (
    <>
      <p className="text-2xl px-6 mt-6 ">List</p>
      <div className="grid justify-start text-blue-400	">
        {getFilteredProducts().length !== 0 ? (
          getFilteredProducts().map((p) => (
            <div className="px-8 mt-1" key={p?._id}>
              <button
                key={p?._id}
                onClick={() => deleteItem(p?._id)}
              >{`x${p?.amount} ${p?.name}`}</button>
            </div>
          ))
        ) : (
          <h5 className="px-6"> Your cart is empty</h5>
        )}
      </div>
    </>
  );
};

export default List;

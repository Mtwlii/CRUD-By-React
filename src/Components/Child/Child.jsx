import React from "react";

//destructuring {pro}
const Child = ({ pro, handleDelete, handelIncrement, handelDecrement , idx  }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="inner p-3 bg-success-subtle position-relative rounded-2 shadow">
          <h6>Id : {pro.id}</h6>
          <h6>Name : {pro.name}</h6>
          <h6>Price : {pro.price}</h6>
          <h6>Category : {pro.category}</h6>
          <h6>Count : {pro.count}</h6>
          {pro.onSale == true ? (
            <div className="bg-danger p-2 position-absolute text-white top-0 end-0 rounded-2">
              Sale
            </div>
          ) : (
            ""
          )}

          <button
            onClick={function () {
              handleDelete(pro.id);
            }}
            className="btn btn-outline-danger w-100 my-2"
          >
            Delete
          </button>
          <button
            onClick={function () {
              handelIncrement(idx);
            }}
            className="btn btn-outline-success w-100 my-2"
          >
            +
          </button>
          <button
            onClick={function () {
              handelDecrement(idx);
            }}
            className="btn btn-outline-warning w-100 my-2"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Child;

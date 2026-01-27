import React, { useState } from "react";
import Child from "../Child/Child";

const Parent = () => {
  const [product, setproduct] = useState([
    {
      id: 1,
      name: "samsung",
      price: 10000,
      count: 15,
      category: "mobile",
      onSale: true,
    },
    {
      id: 2,
      name: "Oppo",
      price: 90000,
      count: 105,
      category: "mobile",
      onSale: false,
    },
    {
      id: 3,
      name: "iphobe",
      price: 190000,
      count: 105,
      category: "mobile",
      onSale: false,
    },
    {
      id: 4,
      name: "toshiba",
      price: 190000,
      count: 235,
      category: "mobile",
      onSale: true,
    },
  ]);
  function handleDelete(id) {
    const y = product.filter((pro) => pro.id !== id);
    setproduct(y);
  }
  function handelIncrement(idx) {
    const y = structuredClone(product);
    y[idx].count++;
    setproduct(y);
  }
  function handelDecrement(idx) {
    const y = structuredClone(product);
    y[idx].count--;
    y.forEach((pro) => {
      if (pro.count < 0) {
        pro.count = 0;
      }
      setproduct(y);
    });
    setproduct(y);
  }

  return (
    <>
      <div className="container my-3">
        <div className="row g-3">
          {/* By Props */}
          {product.map((pro, index) => {
            return (
              <Child
                idx={index}
                pro={pro}
                handleDelete={handleDelete}
                handelIncrement={handelIncrement}
                handelDecrement={handelDecrement}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Parent;

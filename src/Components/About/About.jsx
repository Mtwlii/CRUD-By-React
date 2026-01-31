import React, { useEffect, useState } from "react";
import Style from "./About.module.css";
import { default as axios } from "./../../../node_modules/axios/dist/esm/axios";
import Cat from "../../assets/img/cat.jpg";
import { ColorRing } from "react-loader-spinner";

// life cycle Component 3 Phases => Mount => Update => UnMount
// 1- Mounting Phase => constructor => render => componentDidMount  التشغيل او الأنشاء
/*
    constractor => render => componentDidMount(logic & Api calls => setState)
    */
// 2- Updating Phase => render => componentDidUpdate  التعديل
/*

    props | setState | forceUpdate

    render => componentDidUpdate
  */
// 3- UnMounting Phase => componentWillUnmount الهدم
/**
 * delete component  Leave the page
 * setInterval
 * setTimeOut
 *   clean up =>
 *    clearInterval
 *    clearTimeout
 */
/**
 *
 * useEffect => بيشتغل في 3 مراحل
 *
 */

const About = () => {
  // function test() {
  //   console.log("test");
  // }
  // useEffect(() => {
  //   document.addEventListener("click", test);
  //   return () => {
  //     document.removeEventListener("click", test);
  //   };
  // }, []);

  /**
    async function getAllProducts() {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
    const fainalRes = await res.json();
    console.log(fainalRes.data);
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  */
  const [products, setProducts] = useState(null);

  async function getAllProducts() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products",
    );
    setProducts(data.data);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {products === null ? (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-secondary-subtle ">
          {/* <i className="fa-solid fa-spinner fa-spin fa-7x text-danger"></i> */}
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="container">
          <h1>Product</h1>
          <div className="row g-3">
            {products &&
              products.map((pro, idx) => (
                <div key={idx} className="col-md-2">
                  <div className="inner p-2 bg-info-subtle">
                    <img src={pro.imageCover} alt="Cat" className="w-100" />
                    <h6>Name : {pro.name}</h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default About;

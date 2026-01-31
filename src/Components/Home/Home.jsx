import React from "react";
import Navbar from "../Navbar/Navbar";
import cat from "../../assets/img/cat.jpg";
import Style from "./Home.module.css"
const Home = () => {
  return (
    <>
      <img src={cat} alt="hamada cat" className="w-50" />
      <div className={`p-5 ${Style.test}`}>
        <h1 className="text-center">Home Compobebt</h1>
      </div>
    </>
  );
};

export default Home;

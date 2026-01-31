import React from "react";
import Style from "./About.module.css"

const About = () => {
  return (
    <>
      <div className={`p-5 ${Style.test}`}>
        <h1 className="text-center">About Component</h1>
      </div>
    </>
  );
};

export default About;

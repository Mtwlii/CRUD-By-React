import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 bg-info-subtle ">
            <NavLink to="react">
              <h1>React</h1>
            </NavLink>
            <NavLink to="anguler">
              <h1>Anguler</h1>
            </NavLink>
            <NavLink to="vue">
              <h1>Vue</h1>
            </NavLink>
          </div>

          {/* change part */}
          <div className="col-md-8 bg-warning text-center mt-4">
            {/* <h1>Change Part</h1> */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

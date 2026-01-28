// import { useState } from "react";
import "./App.css";
import Parent from "./Components/Parent/Parent";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import NotFound from "./Components/NotFound/NotFound";
import Vue from "./Components/Vue/Vue";
import Anguler from "./Components/Anguler/Anguler";
import Reacctt from "./Components/Reacctt/Reacctt";
import Layout from "./Components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      index: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, //route
        { path: "/about", element: <About /> }, //route
        { path: "/parent", element: <Parent /> }, //route
        { path: "*", element: <NotFound /> }, //route
        {
          path: "/pro",
          element: <Projects />,
          children: [
            { path: "", element: <h1>Hello , Lets chose a project</h1> },
            { path: "vue", element: <Vue /> },
            { path: "anguler", element: <Anguler /> },
            { path: "react", element: <Reacctt /> },
            { path: "*", element: <NotFound /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
//pinding js + jsx => { line }

//V16.0.0

//state => Data in react
//stateFull Component => Data in react
//V16.8.2 => hooks
//stateLees Component => No Data in react

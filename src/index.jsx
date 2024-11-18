import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/directors",
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
  },
  {
    path: "/actors",
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
  },
  {
    path: "*", // Catch-all route for unknown paths
    element: <ErrorPage />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);

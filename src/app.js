import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.js";
import Body from "./body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./about.js";
import Contact from "./contact.js";
import Error from "./error.js";

const App = () => {
  return (
    <div className="app-container">
      {<Header />}
      {<Outlet />}
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

// console.log(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

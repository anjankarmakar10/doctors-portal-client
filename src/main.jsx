import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./GlobalStyles.js";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <GlobalStyles />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./GlobalStyles.js";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
      <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>
);

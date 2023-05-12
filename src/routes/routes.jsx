import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Appoinment from "../pages/Appointment/Appoinment";
import SignIn from "../pages/SignIn/container/SignInFrom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "appointment",
        element: <Appoinment />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default routes;

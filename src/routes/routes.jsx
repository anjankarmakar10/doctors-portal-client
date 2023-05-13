import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Appoinment from "../pages/Appointment/Appoinment";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import MyAppointment from "../pages/MyAppointment/MyAppointment";

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
        element: (
          <PrivateRoute>
            <Appoinment />
          </PrivateRoute>
        ),
      },
      {
        path: "myappointment",
        element: (
          <PrivateRoute>
            <MyAppointment />
          </PrivateRoute>
        ),
      },

      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;

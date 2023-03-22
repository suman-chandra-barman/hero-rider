import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LearnerLogin from "../pages/Login/LearnerLogin";
import RiderLogin from "../pages/Login/RiderLogin";
import LearnerRegister from "../pages/Register/LearnerRegister";
import RiderRegister from "../pages/Register/RiderRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rider-register",
        element: <RiderRegister />,
      },
      {
        path: "/rider-login",
        element: <RiderLogin />,
      },
      {
        path: "/learner-register",
        element: <LearnerRegister />,
      },
      {
        path: "/learner-login",
        element: <LearnerLogin />,
      },
    ],
  },
]);

export default router;

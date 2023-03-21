import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import RiderLogin from "../pages/Login/RiderLogin";
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
    ],
  },
]);

export default router;

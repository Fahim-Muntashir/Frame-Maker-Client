import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import LoginForm from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import SignUp from "../Pages/Login/SignUp";
import Instructor from "../Pages/Instructor/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;

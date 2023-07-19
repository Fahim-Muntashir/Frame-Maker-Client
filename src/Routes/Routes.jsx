import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import LoginForm from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

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
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;

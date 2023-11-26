import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Meals from "../pages/Meals/Meals";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import Details from "../Details/Details";
import PrivateRoute from "./PrivateRoute";
import JoinUs from "../pages/Shared/JoinUs";

    export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'meals',
          element: <Meals></Meals>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'joinus',
          element: <PrivateRoute><JoinUs></JoinUs></PrivateRoute>
        },
        // {
        //   path: 'details/:id',
        //   element: <Details></Details>,
        //   loader: ({params}) => fetch(`http://localhost:5000/meals/${params.id}`)
        // }
      ]
    },
  ]);
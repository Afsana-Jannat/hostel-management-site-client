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
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddMeals from "../pages/DashBoard/AddMeals/AddMeals";
import AdminRoute from "./AdminRoute";
import AllMeals from "../pages/DashBoard/AllMeals/AllMeals";
import UpdateMeals from "../pages/DashBoard/UpdateMeals/UpdateMeals";
import Payment from "../pages/DashBoard/Payment/Payment";
import Details from "../Details/Details";
import Allreviews from "../pages/DashBoard/AllReviews/Allreviews";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import Upcoming from "../pages/Upcoming/Upcoming";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: 'upcoming',
        element: <Upcoming></Upcoming>
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://hostel-management-ruby.vercel.app/meals/${params.id}`)
      }
    ]
  },

  {
    path: "dashboard",
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children: [
      // normal user
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin routes
      {
        path: 'addMeals',
        element: <AdminRoute><AddMeals></AddMeals></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'allmeals',
        element: <AdminRoute><AllMeals></AllMeals></AdminRoute>,
      },
      {
        path: 'review',
        element: <AdminRoute><Allreviews /></AdminRoute>,
      },
      {
        path: 'updatemeals/:id',
        element: <AdminRoute><UpdateMeals></UpdateMeals></AdminRoute>,
        loader: ({ params }) => fetch(`https://hostel-management-ruby.vercel.app/meals/${params.id}`)
      }
    ]
  }
]);
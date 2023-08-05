import Main from "../Layout/Main";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home/Home";

import ServiceCart from "../Pages/Home/Services/ServiceCart";
import Login from "../Pages/Login/Login";
import CheckBox from "../Pages/Services/CheckBox/CheckBox";
import Services from "../Pages/Services/Services/Services";
import PrivateRoute from "../Pages/Shared/PrivateRoute/PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/serviceDetails',
                element: <ServiceCart></ServiceCart>,

            },
            {
                path: '/services/:id',
                element: <Services></Services>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckBox></CheckBox></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            }

        ]

    }
])
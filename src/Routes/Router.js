import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import ServiceCart from "../Pages/Home/Services/ServiceCart";
import Services from "../Pages/Services/Services/Services";


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
                path: '/serviceDetails/:id',
                element: <ServiceCart></ServiceCart>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>
            }

        ]

    }
])
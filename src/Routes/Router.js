import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Home/Services/Service";
import ServiceCart from "../Pages/Home/Services/ServiceCart";


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
            }

        ]

    }
])
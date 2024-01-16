import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Singup from "./components/Singup";
import PhonesDeatils from "./components/PhonesDeatils";
import ErrorPages from "./components/ErrorPages";
import Error from "./components/ErrorPages";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
         children:[
            {
                path:"/",
                loader: ()=> fetch('/phone.json'),
                element:<Home/>
            },
            {
                path:"/favorite",
                element:<Favorite/>
            },
            {
                path:"/singup",
                element:<Singup/>
            },
            {
                path:"/phones/:ids",
                loader : () => fetch('/phone.json'),
                element: <PhonesDeatils/>
            }
        ],
        errorElement: <Error/>,
    }
])

export default router
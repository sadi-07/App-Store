import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import InstallationApp from "../Pages/InstallationApp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <p>Loading....</p>,
        //errorElement: <ErrorPage></ErrorPage>,
        children: [
            {   
                index: true,
                element: <Home></Home>,
                loader: () => fetch('../appData.json'),
            },
            {
                path: "/apps",
                element: <Apps></Apps>,
            },
            {
                path: "/installation",
                element: <InstallationApp></InstallationApp>,
            },
        ]
    },
    
]);


import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


const router=createBrowserRouter([
    {
        path:'/',
       element:<RootLayout></RootLayout>,
       children:[
        {
        path:'',
       Component:Home,
        },
        {
            path:'/catagory/:id',
            Component:CategoryNews,
            loader:()=>fetch('/news.json')
        },

       ]
    },
   {
    path:'/auth',
    element:<h2>Authentication layout</h2>,
   },
   {
    path:'/news',
    element:<h2>News Layout</h2>,
   },
   {
    path:'/*',
    element:<h2>Error 404</h2>,
   },

]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/instructors',
            element:<Instructors></Instructors>
        },
        {
            path:'/Classes',
            element:<Classes></Classes>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
      ]
    },

    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children:[
          {
              path:'/dashboard',
              element:<Dashboard></Dashboard>
          },
          
        ]
      },
    
  ]);

export default router
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import BookedItems from "../pages/Dashboard/StudentPage/BookedItems/BookedItems";
import EnrolledClass from "../pages/Dashboard/StudentPage/EnrolledClass/EnrolledClass";
import Support from "../pages/Support/Support";
import AddClass from "../pages/Dashboard/InstructorsPage/AddClass/AddClass";
import MyClassInstructor from "../pages/Dashboard/InstructorsPage/MyClassInstructor/MyClassInstructor";
import ManageClass from "../pages/Dashboard/AdminPage/ManageClass/ManageClass";
import ManageUsers from "../pages/Dashboard/AdminPage/ManageUsers/ManageUsers";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import SendFeedback from "../pages/Dashboard/AdminPage/ManageClass/SendFeedback";
import UpdateClass from "../pages/Dashboard/InstructorsPage/UpdateClass/UpdateClass";
import Payment from "../pages/Dashboard/StudentPage/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/StudentPage/EnrolledClass/PaymentHistory/PaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/Classes",
        element: <Classes></Classes>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/bookedClass",
        element: <BookedItems></BookedItems>,
      },
      {
        path: "/dashboard/enrolledClass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/support",
        element: <Support></Support>,
      },
      {
        path: "/dashboard/addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/instructor/myClassess",
        element: <MyClassInstructor></MyClassInstructor>,
      },
      {
        path: "/dashboard/manageClass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: `/dashboard/manageUsers/sendFeedback/:id`,
        element: <SendFeedback></SendFeedback>,
      },
      {
        path: `/dashboard/instructor/update/:id`,
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructor/classess/${params.id}`),
      },
      {
        path: `/dashboard/student/payment/:id`,
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/student/booked/classess/paymentPrice/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/bookedClass",
        element: (
          <StudentRoute>
            <BookedItems></BookedItems>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/enrolledClass",
        element: (
          <StudentRoute>
            <EnrolledClass></EnrolledClass>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/support",
        element: (
          <PrivateRoute>
            <Support></Support>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/instructor/myClassess",
        element: (
          <InstructorRoute>
            <MyClassInstructor></MyClassInstructor>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/manageClass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: `/dashboard/manageUsers/sendFeedback/:id`,
        element: (
          <AdminRoute>
            <SendFeedback></SendFeedback>
          </AdminRoute>
        ),
      },
      {
        path: `/dashboard/instructor/update/:id`,
        element: (
          <InstructorRoute>
            <UpdateClass></UpdateClass>
          </InstructorRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/instructor/classess/${params.id}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`,
              },
            }
          ),
      },
      {
        path: `/dashboard/student/payment/:id`,
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${
              import.meta.env.VITE_API_URL
            }/student/booked/classess/paymentPrice/${params.id}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`,
              },
            }
          ),
      },
    ],
  },
]);

export default router;

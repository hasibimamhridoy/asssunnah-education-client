import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer/Footer";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const MainLayout = () => {
  const loc = useLocation();
  const { isDark } = useAuth();
  console.log(isDark);

  useEffect(() => {
    if (loc.pathname == "/login") {
      document.title = "AssSunnah - LOGIN";
    } else if (loc.pathname === "/") {
      document.title = "AssSunnah - Home";
    } else {
      document.title = `AssSunnah ${loc.pathname.toUpperCase()}`.replace(
        "/",
        "-"
      );
    }
  }, [loc.pathname, loc.state]);

  return (
    <div
      className={`${
        isDark
          ? "bg-gray-900 transition duration-700"
          : "bg-white transition duration-700"
      } lg:px-32 px-2`}
    >
      <ScrollRestoration></ScrollRestoration>
      <div className="navbar">
        <Navbar></Navbar>
      </div>

      <div className="outlet mt-7 mb-16">
        <Outlet></Outlet>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

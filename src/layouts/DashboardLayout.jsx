import React, { useEffect } from "react";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const loc = useLocation();
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
    <div className="flex">
      <ScrollRestoration></ScrollRestoration>

      <div className="lg:w-44">
        <Sidebar></Sidebar>
      </div>

      <div className="mt-16 w-full ml-3 lg:mt-5 lg:ml-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;

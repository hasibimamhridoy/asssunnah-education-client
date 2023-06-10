import React from "react";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const DashboardLayout = () => {
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

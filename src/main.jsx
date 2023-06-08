import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthContextProvider from "./ContextProvider/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="md:max-w-md lg:max-w-[1350px] mx-auto px-2 lg:px-0 font-[Roboto]">
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </div>
  </React.StrictMode>
);

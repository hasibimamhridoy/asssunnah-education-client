import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthContextProvider from "./ContextProvider/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="md:max-w-md lg:max-w-[1800px] mx-auto px-2 lg:px-0 font-[Roboto]">
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          
          <RouterProvider router={router}></RouterProvider>
          
        </QueryClientProvider>
      </AuthContextProvider>
    </div>
  </React.StrictMode>
);

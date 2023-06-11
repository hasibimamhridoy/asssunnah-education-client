import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Bounce } from "react-awesome-reveal";

const Subcribe = () => {
  const { isDark } = useAuth();

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
      

    <Bounce>
    <a
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
      >
        <span className="text-xs bg-sky-500 rounded-full text-white px-4 py-1.5 mr-3">
          All Classess
        </span>{" "}
        <Link to="/classes">
          <span className="text-sm text-sky-500 font-medium">
            See what's new classess added
          </span>
        </Link>
        <svg
          aria-hidden="true"
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Bounce>



      <h1 className={`${isDark ? "mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-500 md:text-5xl lg:text-5xl dark:text-white" : "mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"}`}>
        Ass Sunnah Islamic Education School is a renowned institution.
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        If you know the update information of Ass-Sunnah School please subscribe
        to provide your email. Promise , No Spamming !
      </p>
      <form className="w-full max-w-md mx-auto">
        <label
          htmlFor="default-email"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Email Subscribe
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="email"
            id="default-email"
            className={`${
              isDark
                ? "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                : "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }`}
            placeholder="Enter your email here..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subcribe;

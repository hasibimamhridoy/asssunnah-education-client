import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavlink = ({ to, title }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#00ADEF]" : ""
        }
      >
        <li className="hover:text-[#00ADEF] hover:transition hover:duration-500 cursor-pointer">
          {title}
        </li>
      </NavLink>
    </div>
  );
};

export default CustomNavlink;

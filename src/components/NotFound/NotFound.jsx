import React from "react";
import DoNotDisturbOffIcon from "@mui/icons-material/DoNotDisturbOff";

const NotFound = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <DoNotDisturbOffIcon></DoNotDisturbOffIcon>
        <h1 className="text-center">No Items Found</h1>
      </div>
    </div>
  );
};

export default NotFound;

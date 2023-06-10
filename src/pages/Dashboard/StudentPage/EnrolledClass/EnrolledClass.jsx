import React from "react";
import EnrolledCard from "./EnrolledCard";

const EnrolledClass = () => {
  return (
    <div>
      EnrolledClass Page
      <div className="grid grid-cols-1 w-full gap-5 lg:grid-cols-2">
        <EnrolledCard></EnrolledCard>
      </div>
    </div>
  );
};

export default EnrolledClass;

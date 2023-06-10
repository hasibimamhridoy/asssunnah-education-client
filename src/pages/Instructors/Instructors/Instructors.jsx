import React from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  return (
    <div>
      Instructors
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <InstructorCard></InstructorCard>
      </div>
    </div>
  );
};

export default Instructors;

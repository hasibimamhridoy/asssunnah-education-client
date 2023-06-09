import React from "react";
import InsClassCard from "./InsClassCard";

const MyClassInstructor = () => {
  return (
    <div>
      MyClassInstructor Page
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <InsClassCard></InsClassCard>
      </div>
    </div>
  );
};

export default MyClassInstructor;

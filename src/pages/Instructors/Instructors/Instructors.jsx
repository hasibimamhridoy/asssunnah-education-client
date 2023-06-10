import React, { useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [isShowMore,setIsShowMore] = useState(false)
  return (
    <div>
      Instructors
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <InstructorCard isShowMore = {isShowMore}></InstructorCard>
      </div>
      <div className="flex justify-center items-center my-10">
      <button
      onClick={()=>setIsShowMore(!isShowMore)}
        type="button"
        className="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Show More ...
      </button>
      </div>
    </div>
  );
};

export default Instructors;

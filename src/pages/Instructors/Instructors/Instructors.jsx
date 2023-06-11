import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import { Fade, Slide } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import { useLocation } from "react-router-dom";

const Instructors = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const loc = useLocation();
  const [isInsTructorPath, setIsInstructorPath] = useState(false);
  useEffect(() => {
    if (loc.pathname === "/instructors") {
      setIsInstructorPath(true);
    }
  }, [loc.pathname]);

  return (
    <div>
      <div className="flex justify-center lg:mt-16 lg:mb-10 mb-6 mt-10">
        <SectionTitle clrTitle={`${isInsTructorPath ? "All" : "Popular"}`} subTitle="Instructors"></SectionTitle>
      </div>

      <Fade cascade damping={0.5} duration={2000}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <InstructorCard isShowMore={isShowMore}></InstructorCard>
        </div>
      </Fade>
      <div className="flex justify-center items-center my-10">
        <button
          onClick={() => setIsShowMore(!isShowMore)}
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

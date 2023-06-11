import React from "react";
import useAuth from "../../hooks/useAuth";
import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ clrTitle, subTitle }) => {

  const {isDark} = useAuth()

  return (
   <Fade>
     <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        <mark className="px-2 text-white bg-sky-500 rounded dark:bg-blue-500">
          {clrTitle}
        </mark>
        <span className={`${isDark ? 'text-white' : 'text-gray-900'} ml-2`}>{subTitle}</span>
      </h1>
    </div>
   </Fade>
  );
};

export default SectionTitle;

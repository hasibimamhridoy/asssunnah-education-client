import React from "react";
import InsClassCard from "./InsClassCard";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";

const MyClassInstructor = () => {
  return (
    <div>
      <SectionTitle clrTitle="My Class" subTitle="Page"></SectionTitle>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <InsClassCard></InsClassCard>
      </div>
    </div>
  );
};

export default MyClassInstructor;

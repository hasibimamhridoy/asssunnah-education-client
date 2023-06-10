import React from "react";
import EnrolledCard from "./EnrolledCard";
import NotFound from "../../../../components/NotFound/NotFound";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";

const EnrolledClass = () => {
  return (
    <div>
      <SectionTitle clrTitle='Enrolled' subTitle='Student'></SectionTitle>
      <div className="grid grid-cols-1 w-full gap-5 lg:grid-cols-2">
        <EnrolledCard></EnrolledCard>
      </div>

     
    </div>
  );
};

export default EnrolledClass;

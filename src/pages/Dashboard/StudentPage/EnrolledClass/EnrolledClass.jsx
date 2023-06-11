import React, { useEffect } from "react";
import EnrolledCard from "./EnrolledCard";
import NotFound from "../../../../components/NotFound/NotFound";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";
import useEnrolled from "../../../../hooks/useEnrolledClassess";

const EnrolledClass = () => {
  const [Enrolled, refetch] = useEnrolled();

  useEffect(() => {
    refetch();
  }, [Enrolled, refetch]);

  return (
    <div>
      <SectionTitle clrTitle="Enrolled" subTitle="Classess"></SectionTitle>
      <div className="grid grid-cols-1 w-full gap-5 lg:grid-cols-2">
        <EnrolledCard></EnrolledCard>
      </div>
    </div>
  );
};

export default EnrolledClass;

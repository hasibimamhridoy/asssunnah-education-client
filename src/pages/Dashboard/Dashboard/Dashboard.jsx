import React from "react";
import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {

  const {user} = useAuth()

  return (
    <div className="flex justify-center items-center lg:h-[90vh] h-[80vh]">
      <SectionTitle clrTitle="Welcome" subTitle={user?.displayName}></SectionTitle>
    </div>
  );
};

export default Dashboard;

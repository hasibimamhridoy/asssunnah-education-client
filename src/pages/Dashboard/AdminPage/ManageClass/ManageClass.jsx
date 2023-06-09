import ClassCard from "./ClassCard";

const ManageClass = () => {
  return (
    <div>
      ManageclassName Admin
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ClassCard></ClassCard>
      </div>
    </div>
  );
};

export default ManageClass;

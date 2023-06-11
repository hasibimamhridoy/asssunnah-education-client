import SectionTitle from "../../../../components/SectionTitile/SectionTitle";
import ClassCard from "./ClassCard";

const ManageClass = () => {
  return (
    <div>
      <SectionTitle clrTitle="Manege Class" subTitle="Page"></SectionTitle>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ClassCard></ClassCard>
      </div>
    </div>
  );
};

export default ManageClass;

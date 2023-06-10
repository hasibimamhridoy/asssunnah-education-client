import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import Classes from "../../Classes/Classes/Classes";
import Instructors from "../../Instructors/Instructors/Instructors";
import BannerSlider from "../Banner/BannerSlider/BannerSlider";


const Home = () => {
  return (
    <div className="">
      
      <BannerSlider></BannerSlider>
      <div className="flex justify-center my-5">
        <SectionTitle clrTitle="Popular" subTitle="Classess"></SectionTitle>
      </div>
      <Classes></Classes>
      <div className="flex justify-center lg:mt-28 lg:mb-10 mb-6 mt-10">
        <SectionTitle clrTitle="Popular" subTitle="Instructors"></SectionTitle>
      </div>
      <Instructors></Instructors>
    </div>
  );
};

export default Home;

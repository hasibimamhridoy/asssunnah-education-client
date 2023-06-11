import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import Classes from "../../Classes/Classes/Classes";
import Instructors from "../../Instructors/Instructors/Instructors";
import BannerSlider from "../Banner/BannerSlider/BannerSlider";
import Subcribe from "../Subcribe/Subcribe";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="">
      <Fade cascade duration={2000} damping={1}>
        <BannerSlider></BannerSlider>
      </Fade>
      <div className="flex justify-center lg:my-10">
        <SectionTitle clrTitle="Popular" subTitle="Classess"></SectionTitle>
      </div>


      <Classes></Classes>


      <div className="flex justify-center lg:mt-16 lg:mb-10 mb-6 mt-10">
        <SectionTitle clrTitle="Popular" subTitle="Instructors"></SectionTitle>
      </div>
      <Instructors></Instructors>

      
      <Reviews></Reviews>
      <Subcribe></Subcribe>
    </div>
  );
};

export default Home;

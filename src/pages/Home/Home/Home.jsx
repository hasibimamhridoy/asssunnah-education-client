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
     

      <Classes></Classes>
      <Instructors></Instructors>
      <Reviews></Reviews>
      <Subcribe></Subcribe>
    </div>
  );
};

export default Home;

import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import Classes from "../../Classes/Classes/Classes";
import Instructors from "../../Instructors/Instructors/Instructors";
import Banner from "../Banner/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex justify-center my-5"><SectionTitle clrTitle='Popular' subTitle='Classess'></SectionTitle></div>
            <Classes></Classes>
            <div className="flex justify-center lg:mt-28 lg:mb-10 mb-6 mt-10"><SectionTitle clrTitle='Popular' subTitle='Instructors'></SectionTitle></div>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;
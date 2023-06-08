
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer/Footer";


const MainLayout = () => {
  return (
    <div className="">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="outlet mt-7 mb-16">
        <Outlet></Outlet>
      </div>
      <div className="footer"><Footer></Footer></div>
    </div>
  );
};

export default MainLayout;

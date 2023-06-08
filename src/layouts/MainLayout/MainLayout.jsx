
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer/Footer";


const MainLayout = () => {
  return (
    <div className="">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="outlet h-screen">
        <Outlet></Outlet>
      </div>
      <div className="footer"><Footer></Footer></div>
    </div>
  );
};

export default MainLayout;

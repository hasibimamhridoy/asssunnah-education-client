
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="outlet h-screen">
        <Outlet></Outlet>
      </div>
      <div className="footer">This is footer</div>
    </div>
  );
};

export default MainLayout;
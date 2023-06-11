
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer/Footer";
import useAuth from "../../hooks/useAuth";


const MainLayout = () => {

  const {isDark} = useAuth()
  console.log(isDark);

  return (
    <div className={`${isDark ? 'bg-gray-900 transition duration-700' : 'bg-white transition duration-700'} lg:px-32 px-2`}>
      <ScrollRestoration></ScrollRestoration>
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

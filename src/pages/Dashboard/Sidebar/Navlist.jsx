import HomeIcon from "@mui/icons-material/Home";
import { Badge, List } from "@mui/material";
import DashCustomNavlink from "./DashCustomNavlink";
import DashCusNavMobile from "./DashCusNavMobile";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import DashboardIcon from "@mui/icons-material/Dashboard";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import PaidIcon from "@mui/icons-material/Paid";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  InstructorNavlistMobile,
  InstructorNavlistPC,
} from "./InstructorNavlist";
import { AdminNavlistMobile, AdminNavlistPC } from "./AdminNavlist";
import { StuNavlistMobile, StuNavlistPc } from "./StuNavlistPc";
import useAuth from "../../../hooks/useAuth";

const Navlist = ({ handleDrawerToggle }) => {

  const {handleManualLogout} = useAuth()

  const itemsListMobile = (
    <List>
      <DashCusNavMobile
        to="/dashboard"
        title="Home"
        icon={<DashboardIcon></DashboardIcon>}
        handleDrawerToggle={handleDrawerToggle}
      ></DashCusNavMobile>
      
      <StuNavlistMobile handleDrawerToggle={handleDrawerToggle}></StuNavlistMobile>
      <InstructorNavlistMobile handleDrawerToggle={handleDrawerToggle}></InstructorNavlistMobile>
      <AdminNavlistMobile handleDrawerToggle = {handleDrawerToggle}></AdminNavlistMobile>

      <DashCusNavMobile
        to="/dashboard/support"
        title="Support & Report"
        icon={<HelpIcon></HelpIcon>}
        handleDrawerToggle={handleDrawerToggle}
      ></DashCusNavMobile>

      <DashCusNavMobile
        to="/dashboard/logout"
        title="Logout"
        icon={<LogoutIcon></LogoutIcon>}
        handleDrawerToggle={handleDrawerToggle}
      ></DashCusNavMobile>
    </List>
  );

  const itemsListPC = (
    <List>
      
      <DashCustomNavlink
        to="/"
        title="Home"
        icon={<DashboardIcon></DashboardIcon>}
      ></DashCustomNavlink>

      <StuNavlistPc></StuNavlistPc>
      <InstructorNavlistPC></InstructorNavlistPC>
      <AdminNavlistPC></AdminNavlistPC>

      <DashCustomNavlink
        to="/dashboard/support"
        title="Support & Report"
        icon={<HelpIcon></HelpIcon>}
      ></DashCustomNavlink>
      
      <div onClick={handleManualLogout}><DashCustomNavlink
        
        title="Logout"
        icon={<LogoutIcon></LogoutIcon>}
      ></DashCustomNavlink></div>
    </List>
  );

  return (
    <div className="">
      <div className="block lg:hidden ">{itemsListMobile}</div>
      <div className="hidden lg:block">{itemsListPC}</div>
    </div>
  );
};

export default Navlist;

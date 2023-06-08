
import HomeIcon from "@mui/icons-material/Home";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ContactsIcon from "@mui/icons-material/Contacts";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import DashCustomNavlink from "./DashCustomNavlink";


const Navlist = ({ handleDrawerToggle }) => {

  const student = true


  const itemsList = (
    <List>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "transition duration-1000 text-[#20c997]"
            : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
        }
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton>
            <div className="flex gap-5 justify-center items-center">
              <HomeIcon />
              <ListItemText primary='ড্যাশবোর্ড' />
            </div>
          </ListItemButton>
        </ListItem>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "transition duration-1000 text-[#20c997]"
            : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
        }
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton>
            <div className="flex gap-5 justify-center items-center">
              <DashboardIcon />
              <ListItemText primary='বায়োডাটা ইডিট করুন' />
            </div>
          </ListItemButton>
        </ListItem>
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "transition duration-1000 text-[#20c997]"
            : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
        }
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton>
            <div className="flex gap-5 justify-center items-center">
              <BlurOnIcon />
              <ListItemText primary='পছন্দের তালিকা' />
            </div>
          </ListItemButton>
        </ListItem>
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "transition duration-1000 text-[#20c997]"
            : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
        }
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton>
            <div className="flex gap-5 justify-center items-center">
              <GroupWorkIcon />
              <ListItemText primary='অপছন্দের তালিকা' />
            </div>
          </ListItemButton>
        </ListItem>
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "transition duration-1000 text-[#20c997]"
            : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
        }
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton>
            <div className="flex gap-5 justify-center items-center">
              <AutoStoriesIcon />
              <ListItemText primary='আমার ক্রয়সমূহ' />
            </div>
          </ListItemButton>
        </ListItem>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "transition duration-1000 text-[#20c997]"
            : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
        }
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton>
            <div className="flex gap-5 justify-center items-center">
              <ContactsIcon />
              <ListItemText primary='সাপোর্ট & রিপোর্ট' />
            </div>
          </ListItemButton>
        </ListItem>
      </NavLink>
      <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "transition duration-1000 text-[#20c997]"
              : "hover:transition hover:duration-1000 hover:text-[#20c997] text-gray-300"
          }
        >
          <ListItem onClick={handleDrawerToggle} disablePadding>
            <ListItemButton>
              <div className="flex gap-5 justify-center items-center">
                <ContactsIcon />
                <ListItemText primary="Login" />
              </div>
            </ListItemButton>
          </ListItem>
        </NavLink>
    </List>
  );
  const itemsListPC = (
    <List >
      <DashCustomNavlink to='/dashboard' title='Dashboard' icon={<HomeIcon></HomeIcon>}></DashCustomNavlink>
      <DashCustomNavlink to='/dashboard/editProfile' title='Booked Class' icon={<HomeIcon></HomeIcon>}></DashCustomNavlink>
      <DashCustomNavlink to='/dashboard/editProfile' title='Enrolled Class' icon={<HomeIcon></HomeIcon>}></DashCustomNavlink>
      <DashCustomNavlink to='/dashboard/editProfile' title='Payment History' icon={<HomeIcon></HomeIcon>}></DashCustomNavlink>
      <DashCustomNavlink to='/dashboard/editProfile' title='Support & Report' icon={<HomeIcon></HomeIcon>}></DashCustomNavlink>
      <DashCustomNavlink to='/dashboard/editProfile' title='Logout' icon={<HomeIcon></HomeIcon>}></DashCustomNavlink>
      
    </List>
  );

  return (
    <div className="">
      <div className="block lg:hidden ">{itemsList}</div>

      <div className="hidden lg:block">{itemsListPC}</div>
    </div>
  );
};

export default Navlist;

import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const DashCusNavMobile = ({ to, title, icon: Icon, handleDrawerToggle }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? ""
          : isActive
          ? "transition duration-1000 text-[#00ADEF] font-[Roboto]"
          : "hover:transition hover:duration-1000 hover:text-[#00ADEF] text-gray-700 font-[SolaimanLipi]"
      }
    >
      <ListItem onClick={handleDrawerToggle} disablePadding>
        <ListItemButton>
          <div className="flex gap-5 justify-center items-center ">
            {Icon}
            <ListItemText disableTypography={true} primary={title} />
          </div>
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

export default DashCusNavMobile;

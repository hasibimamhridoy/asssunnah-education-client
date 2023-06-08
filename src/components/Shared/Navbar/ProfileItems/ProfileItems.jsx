
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileItems = () => {
  const user = true;

  return (
    <div>
      <ul>
        {user ? (
          <div className="flex items-center justify-between gap-5">
            
            <Link to='/dashboard/favorites'>
            <Badge badgeContent={4} color="primary">
              <li className="text-2xl hover:text-[#E2136E] hover:transition hover:duration-500 cursor-pointer">
                <AiOutlineHeart></AiOutlineHeart>
              </li>
            </Badge></Link>

            <Link className="hidden lg:block" to="/dashboard">
              <button
                type="button"
                className="text-white bg-[#E2136E] hover:transition hover:duration-500 cursor-pointer hover:bg-[#183f8cde] rounded-full text-sm px-3 py-1 text-center mb-2"
              >
                Dashboard
              </button>
            </Link>

            <Link className="hidden lg:block mb-1.5" to="/dashboard">
            <Avatar sx={{ bgcolor: pink[500] }}>
                <AccountCircleIcon></AccountCircleIcon>
              </Avatar>
            </Link>

            <Link to='/dashboard' className="lg:hidden mb-1">
              <Avatar sx={{ bgcolor: pink[500] }}>
                <AccountCircleIcon></AccountCircleIcon>
              </Avatar>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-[#E2136E] rounded-full text-sm px-3 py-1 text-center mr-2 mb-2"
            >
              Login
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default ProfileItems;

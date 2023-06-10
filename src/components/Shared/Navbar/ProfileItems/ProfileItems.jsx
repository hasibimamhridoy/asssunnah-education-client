import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import useInstructor from "../../../../hooks/useInstructor";
import useAdmin from "../../../../hooks/useAdmin";
import DarkMode from "../DarkMode/DarkMode";

const ProfileItems = () => {
  const { user , isDark } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  return (
    <div>
      <ul className="">
        {user ? (
          <div className="flex items-center justify-between gap-5">
            
            <DarkMode></DarkMode>

            {!isInstructor && !isAdmin && (
              <Link to="/dashboard/bookedClass">
                <Badge badgeContent={4} color="primary">
                  <li className={`${isDark ? 'text-gray-300' : "text-gray-800"} text-2xl hover:text-[#00ADEF] hover:transition hover:duration-500 cursor-pointer`}>
                    <AiOutlineHeart></AiOutlineHeart>
                  </li>
                </Badge>
              </Link>
            )}

            <Link className="hidden lg:block" to="/dashboard">
              <button
                type="button"
                className="text-white bg-[#00ADEF] hover:transition hover:duration-500 cursor-pointer hover:bg-[#183f8cde] rounded-full text-sm px-3 py-1 text-center mb-2"
              >
                Dashboard
              </button>
            </Link>

            <Link className="hidden lg:block mb-1.5" to="/dashboard">
              <Avatar sx={{ bgcolor: "#00ADEF" }}>
                <img src={user?.photoURL} alt="" />
              </Avatar>
            </Link>

            <Link to="/dashboard/student" className="lg:hidden mb-1">
              <Avatar sx={{ bgcolor: "#00ADEF" }}>
                <img src={user?.photoURL} alt="" />
              </Avatar>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center lg:gap-10 gap-3">
            <DarkMode></DarkMode>
            <Link to="/login">
            <button
              type="button"
              className="text-white bg-[#00ADEF] rounded-full text-sm px-3 py-1 text-center mr-2 mb-0.5"
            >
              Login
            </button>
          </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProfileItems;

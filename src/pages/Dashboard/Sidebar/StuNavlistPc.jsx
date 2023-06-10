import DashCustomNavlink from "./DashCustomNavlink";
import { Badge } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import PaidIcon from "@mui/icons-material/Paid";
import DashCusNavMobile from "./DashCusNavMobile";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useAuth from "../../../hooks/useAuth";

export const StuNavlistPc = () => {
  //TODO : GET STUDENT FORM HOOK
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {user} = useAuth()

  return (
    <div>
      
      { !isAdmin && !isInstructor && user && <DashCustomNavlink
            to="/dashboard/bookedClass"
            title="Booked Class"
            icon={
              <Link to="/dashboard/favorites">
                <Badge badgeContent={4} color="primary">
                  <li className="text-2xl hover:text-[#00ADEF] hover:transition hover:duration-500 cursor-pointer">
                    <AiOutlineHeart></AiOutlineHeart>
                  </li>
                </Badge>
              </Link>
            }
          ></DashCustomNavlink>}

      {!isAdmin && !isInstructor && user && (
          <DashCustomNavlink
            to="/dashboard/enrolledClass"
            title="Enrolled Class"
            icon={<JoinInnerIcon></JoinInnerIcon>}
          ></DashCustomNavlink>
        )}

      {!isAdmin && !isInstructor && user && (
          <DashCustomNavlink
            to="/dashboard/paymentHistory"
            title="Payment History"
            icon={<PaidIcon></PaidIcon>}
          ></DashCustomNavlink>
        )}
    </div>
  );
};

export const StuNavlistMobile = ({ handleDrawerToggle }) => {
  //TODO : GET STUDENT FORM HOOK
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {user} = useAuth()

  return (
    <div>
      {!isAdmin && !isInstructor && user &&  (
        <DashCusNavMobile
          to="/dashboard/bookedClass"
          title="Booked Class"
          icon={
            <Link to="/dashboard/favorites">
              <Badge badgeContent={4} color="primary">
                <li className="text-2xl hover:text-[#00ADEF] hover:transition hover:duration-500 cursor-pointer">
                  <AiOutlineHeart></AiOutlineHeart>
                </li>
              </Badge>
            </Link>
          }
          handleDrawerToggle={handleDrawerToggle}
        ></DashCusNavMobile>
      )}

      {!isAdmin && !isInstructor && user &&  (
        <DashCusNavMobile
          to="/dashboard/enrolledClass"
          title="Enrolled Class"
          icon={<JoinInnerIcon></JoinInnerIcon>}
          handleDrawerToggle={handleDrawerToggle}
        ></DashCusNavMobile>
      )}

      {!isAdmin && !isInstructor && user &&  (
        <DashCusNavMobile
          to="/dashboard/paymentHistory"
          title="Payment History"
          icon={<PaidIcon></PaidIcon>}
          handleDrawerToggle={handleDrawerToggle}
        ></DashCusNavMobile>
      )}
    </div>
  );
};

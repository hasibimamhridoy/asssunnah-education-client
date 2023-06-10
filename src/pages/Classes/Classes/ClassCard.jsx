import { useEffect, useState } from "react";
import useIsApprovedClassess from "../../../hooks/useIsApprovedClass";
import { Link, useNavigate } from "react-router-dom";
import {
  addToBooked,
  isAlreadyBooked,
  isAlreadyEnrolled,
} from "../../../api/addTobooked";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
import useAdmin from "../../../hooks/useAdmin";
const ClassCard = () => {
  const navigate = useNavigate();
  const [disabledIds, setDisabledIds] = useState([]);
  const [enrolledDisabledIds, setEnrolledDisabledIds] = useState([]);
  const { user ,isDark } = useAuth();
  const [isApprovedClassess, refetch] = useIsApprovedClassess();
  const [selectedValue, setSelectedValue] = useState(user?.email);

  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  useEffect(() => {
    isAlreadyBooked(user?.email).then((res) => {
      setDisabledIds(res);
    });
  }, [user?.email, selectedValue]);
  useEffect(() => {
    isAlreadyEnrolled(user?.email).then((res) => {
      setEnrolledDisabledIds(res);
    });
  }, [user?.email, selectedValue]);

  const handleCheckboxChange = (event) => {
    if (!user) {
      return navigate("/login");
    }
    setSelectedValue(event.target.checked);
    const bookedClassInformation = event.target.value;

    addToBooked(bookedClassInformation).then((res) => {
      console.log(res);
      if (res.acknowledged) {
        refetch();
        setSelectedValue(user?.email);
      }
    });
  };

  return (
    <>
      {isApprovedClassess.map((singleClass) => {
        const {
          available_seats,
          class_name,
          image,
          instructor_email,
          instructor_name,
          price,
          _id,
          total_enrolled,
        } = singleClass;

        const userEmail = user?.email;

        const bookedClassInfo = {
          available_seats,
          class_name,
          image,
          instructor_email,
          instructor_name,
          price,
          courseId: _id,
          userEmail,
        };

        return (
          <div
            key={_id}
            className={`${isDark ? 'bg-gray-900 border transition duration-700 text-gray-300' : 'bg-white' } mt-10 flex w-full flex-col rounded-xl ${
              available_seats == 0 ? "bg-red-200" : "bg-white"
            } bg-clip-border text-gray-700 shadow-md `}
          >
            <div
              className={`relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border ${
                available_seats == 0 ? "bg-red-100" : "bg-white"
              } text-white shadow-lg shadow-blue-gray-500/40`}
            >
              <img className="h-full" src={image} alt="img-blur-shadow" />
            </div>
            <div className="px-6 mt-7 mb-3">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {class_name}
              </h5>

              <p className="block font-sans text-gray-500 text-base font-light leading-relaxed text-inherit antialiased">
                {instructor_name}
              </p>

              <div className="mt-4">
                <span className="bg-green-400 w-fit  pb-1 pt-1 text-white text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Price: {price} Tk.
                </span>
                <span className="bg-red-400 w-fit  pb-1 pt-1 text-white text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Available Seats: {available_seats}
                </span>
              </div>

              <div className="mt-2">
                <span className="bg-yellow-400 w-fit pb-1 pt-1 text-white text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Total_enrolled: {total_enrolled}
                </span>
              </div>

              <span className="flex items-center mt-5 space-x-2">
                <input
                  disabled={
                    disabledIds.includes(_id) ||
                    enrolledDisabledIds.includes(_id) ||
                    isAdmin ||
                    isInstructor
                  }
                  onChange={handleCheckboxChange}
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value={JSON.stringify(bookedClassInfo)}
                  name="bordered-checkbox"
                  className={`w-4  h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                />
                {disabledIds.includes(_id) && (
                  <Link to="/dashboard/bookedClass">
                    <span className="hover:underline cursor-pointer font-[Roboto]">
                      Go to booked item
                    </span>
                  </Link>
                )}
                {enrolledDisabledIds.includes(_id) && (
                  <Link to="/dashboard/enrolledClass">
                    <span className="hover:underline cursor-pointer font-[Roboto]">
                      Already Enrolled.Go to Class
                    </span>
                  </Link>
                )}

                {!disabledIds.includes(_id) &&
                  !enrolledDisabledIds.includes(_id) && (
                    <span>Add to Booked</span>
                  )}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ClassCard;

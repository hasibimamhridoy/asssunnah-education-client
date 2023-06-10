import React from "react";
import useIsBookedClassess from "../../../../hooks/useBookedItems";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { removeToBooked } from "../../../../api/addTobooked";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";
import NotFound from "../../../../components/NotFound/NotFound";

const BookedCard = () => {
  const [isBookedClass, refetch] = useIsBookedClassess();

  const handleDeletedBooked = (_id) => {
    removeToBooked(_id).then((res) => {
      console.log(res)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    
    refetch();
  };

  if (isBookedClass.length < 1) {
    return (
      <div>
        <NotFound></NotFound>
      </div>
    );
  }

  return (
    <>
    
      {isBookedClass.map((singleClass) => {
        const {
          available_seats,
          class_name,
          image,
          instructor_email,
          instructor_name,
          price,
          _id,
        } = singleClass;

        return (
          <div
            key={_id}
            className=" mt-10 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative mx-4 -mt-6 lg:h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                className="object-contain"
                src={image}
                alt="img-blur-shadow"
              />
            </div>
            <div className="px-6 mt-7 mb-3">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {class_name}
              </h5>

              <p className="block font-sans text-gray-500 text-base font-light leading-relaxed text-inherit antialiased">
                {instructor_name}
              </p>
              <p className="block text-black text-base font-light leading-relaxed text-inherit antialiased">
                Email: {instructor_email}
              </p>

              <div className="mt-4">
                <span className="bg-green-400 w-fit  pb-1 pt-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Price: {price} Tk.
                </span>
                <span className="bg-red-400 w-fit  pb-1 pt-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Available Seats: {available_seats}
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <Link to={`/dashboard/student/payment/${_id}`}>
                  <button
                    className="flex select-none items-center gap-3 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <PaidIcon></PaidIcon>
                    Pay Now
                  </button>
                </Link>
                <button
                  onClick={() => handleDeletedBooked(_id)}
                  className="flex select-none items-center gap-3 rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  <BookmarkRemoveIcon></BookmarkRemoveIcon>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}

    </>
  );
};

export default BookedCard;

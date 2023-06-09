import React from "react";
import useClassess from "../../../../hooks/useClassess";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FeedbackIcon from "@mui/icons-material/Feedback";
import Swal from "sweetalert2";
import { approvedClass } from "../../../../api/manageClass";

const ClassCard = () => {
  const [classess, refetch] = useClassess();



  const handleApproved = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "approved this class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approved It!",
      }).then((result) => {
        if (result.isConfirmed) {
          approvedClass(id)
          .then(res=>{
            console.log(res);
            refetch()
          })
          Swal.fire("Approved Class!", "User has been instructor.", "success");
        }
      });
  }
  const handleDenied = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "denied this class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, denied It!",
      }).then((result) => {
        if (result.isConfirmed) {
          approvedClass(id)
          .then(res=>{
            console.log(res);
            refetch()
          })
          Swal.fire("denied Class!", "Class has been denied.", "success");
        }
      });
  }


  return (
    <>
      {classess.map((singleClass) => {
        const {
          available_seats,
          class_name,
          feedback,
          image,
          instructor_email,
          instructor_name,
          price,
          status,
          _id,
        } = singleClass;
        return (
          <div
            key={_id}
            className=" mt-10 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="img-blur-shadow"
              />
            </div>
            <div className="px-6 mt-7 mb-3">
              
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {class_name}

               {status === 'pending' && <span className="bg-yellow-400 ml-4 pb-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {status}
              </span>}
               {status === 'denied' && <span className="bg-red-400 ml-4 pb-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {status}
              </span>}
               {status === 'approved' && <span className="bg-red-400 ml-4 pb-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {status}
              </span>}
              </h5>
              

              <p className="block font-sans text-gray-500 text-base font-light leading-relaxed text-inherit antialiased">
                {instructor_name}
              </p>
            </div>
            <div className="flex px-6 mt-3 mb-7 gap-5">
              <button
              disabled={status === 'approved' ||status === 'denied'}
              onClick={()=>handleApproved(_id)}
                className={`select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${status === 'approved' || status === 'denied' && 'cursor-not-allowed bg-gray-300'}`}
                type="button"
                data-ripple-light="true"
              >
                <AddTaskIcon></AddTaskIcon>
              </button>
              <button
              disabled={status === 'approved' ||status === 'denied' }
                className={`select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${status === 'approved' || status === 'denied' &&  'cursor-not-allowed bg-gray-300'}`}
                type="button"
                data-ripple-light="true"
              >
                <HighlightOffIcon></HighlightOffIcon>
              </button>
              <button
                className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                <FeedbackIcon></FeedbackIcon>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ClassCard;

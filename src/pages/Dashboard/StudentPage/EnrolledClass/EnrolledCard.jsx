import React from "react";
import useEnrolled from "../../../../hooks/useEnrolledClassess";
import NotFound from "../../../../components/NotFound/NotFound";

const EnrolledCard = () => {

    const [Enrolled,refetch] = useEnrolled()

    if (Enrolled.length < 1) {
        return (
          <div>
            <NotFound></NotFound>
          </div>
        );
      }

      refetch()
    

  return (
    <>
      {Enrolled.map((singleClass) => {
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
                className="object-contain w-full"
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
             
              <div className="mt-5 flex gap-3">
                <button
                  className="flex select-none items-center gap-3 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  {/* <PaidIcon></PaidIcon> */}
                  Contine learing...
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EnrolledCard;

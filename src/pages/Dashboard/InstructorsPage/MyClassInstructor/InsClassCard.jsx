import { Link } from "react-router-dom";
import useInstructorsClassess from "../../../../hooks/useInstructorsClassess";
import EditNoteIcon from "@mui/icons-material/EditNote";
import NotFound from "../../../../components/NotFound/NotFound";

const InsClassCard = () => {
  const [instructorsClassess] = useInstructorsClassess();

  if (instructorsClassess.length < 1) {
    return (
      <div>
        <NotFound></NotFound>
      </div>
    );
  }

  return (
    <>
      {instructorsClassess.map((singleClass) => {
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
                src={image}
                className="w-full"
                alt="img-blur-shadow"
              />
            </div>
            <div className="px-6 mt-7 mb-3">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {class_name}

                {status === "pending" && (
                  <span className="bg-yellow-400 ml-4 pb-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {status}
                  </span>
                )}
                {status === "denied" && (
                  <span className="bg-red-500 ml-4 pb-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {status}
                  </span>
                )}
                {status === "approved" && (
                  <span className="bg-green-400 ml-4 pb-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {status}
                  </span>
                )}
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
            </div>

            {feedback && (
              <span className="bg-purple-700  ml-6 w-fit  pb-1 pt-1 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Feedback: {feedback}
              </span>
            )}

            <div className="flex px-6 mt-3 mb-7 gap-5">
              <Link to={`/dashboard/instructor/update/${_id}`}>
                <button
                  className={`select-none w-full rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                  type="button"
                  data-ripple-light="true"
                >
                  <EditNoteIcon></EditNoteIcon>
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InsClassCard;

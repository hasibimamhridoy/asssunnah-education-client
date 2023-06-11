import useAuth from "../../../hooks/useAuth";
import useShowInstructors from "../../../hooks/useShowInstructors";

const InstructorCard = ({ isShowMore }) => {
  const [ShowInstructors] = useShowInstructors();
  const { isDark } = useAuth();

  return (
    <>
      {isShowMore
        ? ShowInstructors.map((instructpr) => {
            const { _id, image, name, email } = instructpr;

            return (
              <div
                key={_id}
                className={`${
                  isDark
                    ? "bg-slate-900 border transition duration-700 text-white"
                    : "bg-white"
                } mt-10 flex w-full flex-col rounded-xl bg-clip-border text-gray-700 shadow-md`}
              >
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={image} alt="img-blur-shadow" />
                </div>
                <div className="px-6 mt-7 mb-3">
                  <p className="block font-sans text-gray-500 text-base font-light leading-relaxed text-inherit antialiased">
                    {name}
                  </p>
                  <p className="block text-black text-base font-light leading-relaxed text-inherit antialiased">
                    Email: {email}
                  </p>
                </div>
              </div>
            );
          })
        : ShowInstructors.slice(0, 6).map((instructpr) => {
            const { _id, image, name, email } = instructpr;

            return (
              <div
                key={_id}
                className={`${
                  isDark
                    ? "bg-slate-900 border transition duration-700 text-white"
                    : "bg-white"
                } mt-10 flex w-full flex-col rounded-xl bg-clip-border text-gray-700 shadow-md`}
              >
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={image} alt="img-blur-shadow" />
                </div>
                <div className="px-6 mt-7 mb-3">
                  <p className="block font-sans text-gray-500 text-base font-light leading-relaxed text-inherit antialiased">
                    {name}
                  </p>
                  <p className="block text-black text-base font-light leading-relaxed text-inherit antialiased">
                    Email: {email}
                  </p>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default InstructorCard;

import Swal from "sweetalert2";
import { addClass } from "../../../../api/manageClass";
import { imageUpload } from "../../../../api/utils";
import Button from "../../../../components/Button/Button";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";

const AddClass = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddClass = (e) => {
    e.preventDefault();
    const form = e.target;
    const class_name = form.class_name.value;
    const instructor_name = user?.displayName;
    const instructor_email = user?.email;
    const price = parseFloat(form.price.value);
    const available_seats = parseFloat(form.seats.value);
    const status = "pending";
    const feedback = "";
    const total_enrolled = 0;
    const image = e.target.image.files[0];

    imageUpload(image).then((res) => {
      const image = res.data.url;
      const addClassInformation = {
        class_name,
        instructor_name,
        instructor_email,
        price,
        available_seats,
        status,
        feedback,
        image,
        total_enrolled,
      };
      addClass(addClassInformation).then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Addedd",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/dashboard/instructor/myClassess");
      });
    });
  };

  return (
    <div>
      <SectionTitle clrTitle="Add Class" subTitle="Page"></SectionTitle>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form onSubmit={handleAddClass}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="class_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Class Name
                </label>
                <input
                  type="text"
                  name="class_name"
                  id="class_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="instructor_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Instructor Name
                </label>
                <input
                  value={user?.displayName}
                  type="text"
                  name="instructor_name"
                  id="instructor_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Instructor Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user?.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Class Banner Image
                </label>
                <input
                  name="image"
                  className="block w-full text-s p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="seats"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of seats
                </label>
                <input
                  type="number"
                  name="seats"
                  id="seats"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
            </div>

            <div className="flex w-full justify-center mt-5">
              <Button type="submit" title="Add Class"></Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddClass;

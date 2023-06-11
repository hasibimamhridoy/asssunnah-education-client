import Swal from "sweetalert2";
import {
  deleteUser,
  makeAdmin,
  makeInstructor,
} from "../../../../api/makeRole";
import useUsers from "../../../../hooks/useUsers";
import DeleteIcon from "@mui/icons-material/Delete";
const UserRow = () => {
  const [users, refetch] = useUsers();

  const handleMakeInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "make instructor in this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make instructor!",
    }).then((result) => {
      if (result.isConfirmed) {
        makeInstructor(user).then((res) => {
          refetch();
        });
        Swal.fire("Make instructor!", "User has been instructor.", "success");
      }
    });
  };
  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "to make admin to this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        makeAdmin(email);
        refetch();
        Swal.fire("Make Admin!", "User has been admin now.", "success");
      }
    });
  };
  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deleted!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(_id).then((res) => {
          refetch();
        });
        Swal.fire("Deleted User!", "User has been Deleted.", "success");
      }
    });
  };

  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user._id}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.name}
            </th>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">
              {`${user.role !== 'admin' && user.role !== 'instructor' ? "student" : `${user.role}` }`}
              </td>
            {/* { && <td className="px-6 py-4">Student</td>} */}
            <td className="px-6 py-4">
              <button
                disabled={user?.role === "instructor"}
                onClick={() => handleMakeInstructor(user)}
                type="button"
                className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${user?.role === "instructor" && 'cursor-not-allowed bg-gray-300 hover:bg-slate-300'}`}
              >
                Instructor
              </button>
            </td>
            <td className="px-6 py-4">
              <button
              disabled={user?.role === "admin"}
                onClick={() => handleMakeAdmin(user?.email)}
                type="button"
                className={`text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${user?.role === "admin" && 'cursor-not-allowed bg-gray-300 hover:bg-slate-300'}`}
              >
                Admin
              </button>
            </td>
            <td className="px-6 py-4">
              <button
                onClick={() => handleDeleteUser(user?._id)}
                className="bg-red-500 rounded-full p-2 text-white"
              >
                <DeleteIcon></DeleteIcon>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default UserRow;

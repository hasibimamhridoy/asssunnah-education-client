import React, { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthContextProvider";
import DeleteIcon from '@mui/icons-material/Delete';

const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="">
      <h1 className="text-center text-3xl">Manage Users</h1>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Make Instructor
                </th>
                <th scope="col" className="px-6 py-3">
                  Make Admin
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Watch 5
                </th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4">Wearables</td>
                <td className="px-6 py-4">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Instructor</button>

                </td>
                <td className="px-6 py-4">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Admin</button>

                </td>
                <td className="px-6 py-4">
                  <button className="bg-red-500 rounded-full p-2 text-white">
                  <DeleteIcon></DeleteIcon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

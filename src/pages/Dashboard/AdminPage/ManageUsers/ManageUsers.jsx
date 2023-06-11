
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";
import UserRow from "./UserRow";

const ManageUsers = () => {

  return (
    <div className="">
      <SectionTitle clrTitle="Manege Class" subTitle="Page"></SectionTitle>

      <div className="mt-10">
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

            <UserRow></UserRow>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

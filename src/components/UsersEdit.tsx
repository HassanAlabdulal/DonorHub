import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faHistory,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function UsersEdit() {
  const initialUsers = [
    { id: "1234567890", name: "Aaron Smith" },
    { id: "2345678901", name: "Brenda Johnson" },
    { id: "3456789012", name: "Charles Brown" },
    { id: "4567890123", name: "Diana Williams" },
    { id: "5678901234", name: "Edward Jones" },
    { id: "6789012345", name: "Fiona White" },
    { id: "7890123456", name: "George Harris" },
    { id: "8901234567", name: "Hannah Martin" },
    { id: "9012345678", name: "Isaac Clark" },
    { id: "0123456789", name: "Jennifer Lewis" },
    { id: "9012345678", name: "Hassan Alabdulal" },
    { id: "0123456789", name: "Abdullah Al Matawah" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.id.includes(searchTerm) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f7f7] pt-16 flex flex-col items-center min-h-screen font-roboto">
      <div className="flex flex-col items-center w-full max-w-4xl p-8 overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="w-full mb-4 text-2xl font-semibold text-center text-gray-900">
          Users
        </h1>

        {/* Create New User Button */}
        <div className="self-end mb-4">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Create a new user profile
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center w-full mb-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm focus:ring-[#3e60a3] focus:border-[#3e60a3] block w-60 sm:w-80 md:w-96 h-12 text-base border-gray-300 pl-4 pr-10 rounded-lg"
              placeholder="Search by ID or Name"
              style={{ backgroundColor: "#ececec" }} // Here we change the background color
              onChange={handleSearchChange}
            />
            <button
              className="absolute top-0 right-0 mt-3 mr-3"
              onClick={() => {
                /* Function to handle search */
              }}
            >
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="text-gray-600"
              />
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="w-full">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 text-center border-b-2 border-gray-300">
                  ID
                </th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-300">
                  Name
                </th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="px-5 py-3 text-center border-b border-gray-300">
                    {user.id}
                  </td>
                  <td className="px-5 py-3 text-center border-b border-gray-300">
                    {user.name}
                  </td>
                  <td className="px-5 py-3 border-b border-gray-300">
                    <div className="flex justify-center space-x-2">
                      {/* History Anchor */}
                      <a
                        href="OperationsHistoryAdminPage"
                        className="inline-flex items-center px-4 py-2 font-bold text-white bg-black rounded hover:bg-blue-700"
                      >
                        <FontAwesomeIcon icon={faHistory} className="mr-2" />
                        History
                      </a>

                      {/* Edit Anchor */}
                      <a
                        href="EditProfileAdminPage"
                        className="inline-flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      >
                        <FontAwesomeIcon icon={faEdit} className="mr-2" />
                        Edit
                      </a>

                      {/* Remove Button */}
                      <button
                        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                        onClick={() => handleRemoveUser(user.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

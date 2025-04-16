import React, { useState } from "react";
import EditStaffModal from "./EditStaffModal";

const staffList = [
  {
    id: 1,
    name: "biju meher",
    designation: "Professor",
    department: "Computer Science",
    phone: "123-456-7890",
    email: "biju123@gmail.com",
  },
  {
    id: 2,
    name: "raju meher",
    designation: "Assistant Professor",
    department: "Mathematics",
    phone: "987-654-3210",
    email: "raju123@gmail.com",
  },
];

const ManageStaff = () => {
  const [search, setSearch] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [staffData, setStaffData] = useState(staffList);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (staff) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this staff?");
    if (confirmed) {
      setStaffData((prevData) => prevData.filter((staff) => staff.id !== id));
    }
  };

  const handleSave = (updatedStaff) => {
    setStaffData((prevData) =>
      prevData.map((s) => (s.id === updatedStaff.id ? updatedStaff : s))
    );
  };

  const filteredStaff = staffData.filter((staff) => {
    return (
      staff.name.toLowerCase().includes(search.toLowerCase()) &&
      (designation ? staff.designation === designation : true) &&
      (department ? staff.department === department : true)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Staff</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-wrap items-center gap-3 mb-4 p-4 ">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Designations</option>
            <option value="Professor">Professor</option>
            <option value="Assistant Professor">Assistant Professor</option>
          </select>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 border-b">Name</th>
                <th className="text-left px-4 py-2 border-b">Designation</th>
                <th className="text-left px-4 py-2 border-b">Department</th>
                <th className="text-left px-4 py-2 border-b">Phone</th>
                <th className="text-left px-4 py-2 border-b">Email</th>
                <th className="text-left px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{staff.name}</td>
                  <td className="px-4 py-2 border-b">{staff.designation}</td>
                  <td className="px-4 py-2 border-b">{staff.department}</td>
                  <td className="px-4 py-2 border-b">{staff.phone}</td>
                  <td className="px-4 py-2 border-b">{staff.email}</td>
                  <td className="px-4 py-2 border-b space-x-3">
                    <button
                      onClick={() => handleEdit(staff)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(staff.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredStaff.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No staff found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <EditStaffModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        staffData={selectedStaff}
        onSave={handleSave}
      />
    </div>
  );
};

export default ManageStaff;

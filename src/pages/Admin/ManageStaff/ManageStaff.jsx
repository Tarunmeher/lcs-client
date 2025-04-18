import React, { useState } from "react";
import EditStaffModal from "./EditStaffModal";
import { Pen, Trash2, Plus, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const ManageStaff = () => {
  const [staffData, setStaffData] = useState([]);
  const [search, setSearch] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetchStaff();
  }, [navigate]);

  const fetchStaff = async () => {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      const res = await fetch(`${url}/getStaff`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({}),
      });

      const data = await res.json();
      if (data.status=='success') {
        if(data.results.length){
          setStaffData(data.results);
        }else{
          toast.error('No Staff Found');
        }        
      } else {
        setStaffData(null);
        toast.error(data.message || 'No Staff Found');
      }
    } catch (err) {
      console.error(err);
      setStaffData(null);
      toast.error('Something Went Wrong');
    }
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

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
  const closeModal = (status, data) => {
    setIsModalOpen(status);
    if (data) {
      setStaffData(data);
    }
  }

  const filteredStaff = staffData && staffData.filter((staff) => {
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
        <div className="flex justify-between items-center gap-3 mb-4 p-4 ">
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
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New Staff
          </button>
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
              {filteredStaff && filteredStaff.map((staff) => (
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
              {filteredStaff && filteredStaff.length === 0 && (
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
        onClose={(data) => closeModal(false, data)}
        staffData={selectedStaff}
        onSave={handleSave}
      />
      {/* ToastContainer added here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ManageStaff;

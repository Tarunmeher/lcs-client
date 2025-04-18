import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const AddImageModal = ({ isOpen, onClose, onAdd }) => {
  const [folderName, setFolderName] = useState("");
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (folderName && file) {
      try {
        var formdata = new FormData();
        console.log(file);
        formdata.append("file", file);
        formdata.append("directoryName", folderName);
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        const res = await fetch(`${url}/uploadFile`, {
          method: 'POST',
          headers: {},
          body: formdata,
        });

        const data = await res.json();
        if (res.ok) {
          toast.success(data.message);
          setFolderName("");
          setFile('');
          onAdd();
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Image</h2>

        <input
          type="text"
          placeholder="Image Title"
          className="w-full p-2 border rounded mb-4"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={!file || !folderName}
          >
            Add
          </button>
        </div>
      </div>

      {/* ToastContainer added here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddImageModal;

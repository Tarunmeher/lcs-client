import React, { useState } from "react";

const AddImageModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (title && file) {
      const previewUrl = URL.createObjectURL(file);
      onAdd({ title, url: previewUrl }); // Pass title and preview URL
      setTitle("");
      setFile(null);
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
            disabled={!file || !title}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddImageModal;

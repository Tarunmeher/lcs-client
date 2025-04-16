import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // You can use any icon lib, like Lucide or FontAwesome
import AddImageModal from "./AddImageModal";

const ManageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [gallery, setGallery] = useState([
    {
      id: 1,
      title: "Nature View",
      url: "https://cdn.pixabay.com/photo/2024/03/11/15/25/trees-8626959_1280.jpg",
    },
    {
      id: 2,
      title: "City Lights",
      url: "https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (confirmDelete) {
      setGallery(gallery.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Gallery</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Image
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow rounded overflow-hidden"
          >
            {/* Delete Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering preview
                handleDelete(item.id);
              }}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100"
              title="Delete"
            >
              <Trash2 className="text-red-600 w-5 h-5" />
            </button>

            <div
              onClick={() => setPreviewImage(item)}
              className="cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      {AddImageModal && (
        <AddImageModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onAdd={(newItem) => {
            setGallery([...gallery, { id: gallery.length + 1, ...newItem }]);
            setShowModal(false);
          }}
        />
      )}

      {/* Fullscreen Image Preview */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
          <div className="relative bg-white p-4 rounded shadow-lg max-w-4xl w-full">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-600"
            >
              &times;
            </button>

            <img
              src={previewImage.url}
              alt={previewImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <h2 className="text-center text-xl font-semibold mt-4">
              {previewImage.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageGallery;

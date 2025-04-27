import { useState } from "react";

export default function GallerySection() {
    const images = [
        "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Gallery</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg cursor-pointer">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedImage(src)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-[90vh] rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

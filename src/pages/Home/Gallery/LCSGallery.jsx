import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const images = [
    "https://cdn.pixabay.com/photo/2022/05/24/04/38/study-7217599_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/03/05/47/students-5540227_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/13/16/39/ginkgo-2946131_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/13/16/37/ginkgo-2946118_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/09/09/21/55/university-933618_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/05/29/16/54/breakfast-7229532_1280.jpg",
];

export default function LCSGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return (
        <section className="py-10 bg-yellow-20">
            <div className="container mx-auto text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">LCS Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {images.map((img, index) => (
                        <div key={index} className="relative cursor-pointer" onClick={() => setSelectedImage(img)} data-aos="zoom-in">
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover shadow-md transition-all hover:scale-105 duration-1000"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative max-w-3xl w-full mt-8" data-aos="fade-in">
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 text-gray-800" />
                        </button>
                        <img src={selectedImage} alt="Selected" className="w-full rounded-lg" />
                    </div>
                </Dialog>
            )}
        </section>
    );
}
import React from "react";
import { Link } from "react-router-dom";

const GalleryBanner = () => {
    return (
        <div className="relative w-full h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/09/08/00/38/friend-2727307_1280.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl font-bold">Gallery</h1>
                <p className="text-white mt-2">
                    <Link to='/'> <span className="text-gray-300">Home</span></Link> <span className="text-yellow-400">&raquo; LCS Events</span>
                </p>
            </div>
        </div>
    );
};

export default GalleryBanner;

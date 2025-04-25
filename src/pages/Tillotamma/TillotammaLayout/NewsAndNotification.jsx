// src/components/NewsSliderWithNotifications.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const newsItems = [
    {
        image: "https://cdn.pixabay.com/photo/2017/08/06/23/50/people-2597679_1280.jpg",
        headline: "Annual Fuction",
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/10/06/13/29/concert-974418_1280.jpg",
        headline: "Annual Sports",
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/10/06/13/28/technology-974413_1280.jpg",
        headline: "Teacher's Day",
    },
];

const notifications = [
    { text: "asdfghjksdfghjksdfghjk", link: "#" },
    { text: "edfghjkldfghjkl", link: "#" },
    { text: "sdfghjkldfghjkl", link: "#" },
    { text: "sxasdfkmasdfn", link: "#" },
];

export default function NewsSliderWithNotifications() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 800 });
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % newsItems.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-gray-300">
                <div className="w-full max-w-6xl mx-auto mt-[-20]">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold p-10 text-center text-black mb-10" data-aos="fade-down">
                        News & Notifications
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* News Slider */}
                        <div
                            className="md:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden"
                            data-aos="fade-right"
                        >
                            <img
                                src={newsItems[currentSlide].image}
                                alt="News"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-[#A4163A] text-white text-lg font-semibold">
                                {newsItems[currentSlide].headline}
                            </div>
                        </div>

                        {/* Notifications */}
                        <div
                            className="md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden"
                            data-aos="fade-left"
                        >
                            <div className="bg-[#A4163A] text-white p-4 font-semibold text-center">
                                Notifications
                            </div>
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute animate-scroll space-y-4 p-4">
                                    {notifications.map((note, index) => (
                                        <a
                                            key={index}
                                            href={note.link}
                                            className="block text-sm text-blue-600 hover:underline"
                                        >
                                            🔔 {note.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Animation */}
                    <style>{`
        @keyframes scroll {
          0% { top: 100%; }
          100% { top: -100%; }
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
                </div>
            </div>
        </>

    );
}

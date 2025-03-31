import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Ensures animation runs only once
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 bg-white gap-10">
            {/* Left Side - Content */}
            <div className="flex-1 space-y-6" data-aos="fade-right">
                <h4 className="text-orange-500 text-4xl font-bold">ABOUT US</h4>
                <h2 className="text-4xl font-bold">
                    Our Education System <span className="text-orange-500">Inspires</span> You More.
                </h2>
                <p className="text-gray-600">
                    There are many variations of passages available, but the majority have suffered
                    alteration in some form by injected humour.
                </p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4" data-aos="fade-up">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            📘
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Education Services</h3>
                            <p className="text-gray-500">It is a long-established fact that a reader will be using content.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            🌍
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">International Hubs</h3>
                            <p className="text-gray-500">It is a long-established fact that a reader will be using content.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-8 mt-6" data-aos="zoom-in">
                    <Link to='/'>
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600">
                            Back To Home →
                        </button>
                    </Link>
                    <div className="text-green-600 font-semibold">
                        Call Now
                        <p className="text-lg font-bold">+2 123 654 7898</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Images */}
            <div className="hidden sm:hidden lg:flex flex-1 flex-col gap-6 items-center" data-aos="fade-left">
                <img
                    src="https://cdn.pixabay.com/photo/2022/05/29/16/54/breakfast-7229532_1280.jpg"
                    alt="Students Learning"
                    className="w-3/4 h-80 rounded-lg shadow-lg"
                />
                <div className="flex gap-4 w-3/4">
                    <img
                        src="https://cdn.pixabay.com/photo/2022/05/29/16/54/breakfast-7229532_1280.jpg"
                        alt="Students Discussing"
                        className="w-1/2 h-40 rounded-lg shadow-lg"
                        data-aos="flip-left"
                    />
                    <img
                        src="https://cdn.pixabay.com/photo/2022/05/29/16/54/breakfast-7229532_1280.jpg"
                        alt="Student Studying"
                        className="w-1/2 h-40 rounded-lg shadow-lg"
                        data-aos="flip-right"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;

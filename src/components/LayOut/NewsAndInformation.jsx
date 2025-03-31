import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsData = [
    "Breaking: New policies announced for 2025!",
    "Tech News: AI is transforming the industry.",
    "Sports: Local team wins championship!",
    "Health: Tips for a balanced diet.",
    "Weather: Expect heavy rains this week.",
];

const infoLinks = [
    { name: "Admission Process", path: "/admission" },
    { name: "Exam Schedules", path: "/exams" },
    { name: "Scholarships & Grants", path: "/scholarships" },
    { name: "Campus Life", path: "/campus-life" },
    { name: "Upcoming Events", path: "/events" },
    { name: "Library Resources", path: "/library" },
    { name: "Student Activities", path: "/activities" },
    { name: "Internship Opportunities", path: "/internships" },
];

const NewsInfoComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <div className="p-4 mt-10">
            <h1 className="text-2xl font-bold text-center mb-4" data-aos='fade-down'>News & Notifications</h1>
            <div className="flex flex-col md:flex-row gap-4 h-[300px]">
                {/* Left Side - News Slider */}
                <div className="w-full md:w-1/2 bg-white p-4 shadow-md h-[280px] overflow-hidden" data-aos="fade-right">
                    <h2 className="text-xl font-bold mb-2">Latest News</h2>
                    <Slider {...sliderSettings}>
                        {newsData.map((news, index) => (
                            <div key={index} className="text-center p-4 text-lg font-semibold">
                                {news}
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Right Side - Notification Links */}
                <div className="w-full md:w-1/2 bg-white p-4 shadow-md h-[280px] overflow-hidden" data-aos="fade-left">
                    <h2 className="text-xl font-bold mb-2">Notifications</h2>
                    <div className="relative h-[220px] overflow-hidden">
                        <motion.div
                            className="flex flex-col space-y-2 absolute top-0 left-0 w-full"
                            animate={{ y: [0, -infoLinks.length * 40] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        >
                            {[...infoLinks, ...infoLinks].map((link, index) => (
                                <Link key={index} to={link.path} className="text-blue-500 hover:underline cursor-pointer block py-1">
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsInfoComponent;

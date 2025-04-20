import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const data = [
    {
        icon: "❓",
        title: "Why Choose Us",
        description:
            "Become industry ready, Empowered with our Industrial programs. Our wide range of industrial & advanced courses developed with industries and experts provides...",
        bgColor: "bg-gradient-to-r from-blue-400 to-purple-500",
    },
    {
        icon: "📈",
        title: "Career Growth",
        description:
            "Our courses & industry certifications help a student to enhance portfolio for core sector jobs or top university admit. All our courses are associated with internships t...",
        bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
    },
    {
        icon: "₹",
        title: "Most Affordable in India",
        description:
            "SkyySkill’s programs are most affordable in market to help everyone pursue their desired course without worrying about cost.",
        bgColor: "bg-gradient-to-r from-yellow-400 to-red-500",
    },
];

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="w-full p-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                    <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600"></span>
                    </span>
                    Why <span className="text-blue-600 inline-block" data-aos="fade-up">LCS</span>
                </h2>
                <p className="mt-2 text-gray-600 text-lg" data-aos="fade-up">
                    Leading E-learning & Skill Development Platform. We are catering in 7
                    countries & have trained over 2 Lakhs students. We offer more than 60
                    courses in different domains.
                </p>
            </div>

            <div className="mt-10 p-8 rounded-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 whycardparent">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`whycard p-6 rounded-xl shadow-lg drop-shadow-lg text-center cursor-pointer hover:scale-105 duration-500 transition-all text-white ${item.bgColor}`}
                    >
                        <div className="bg-white p-4 w-16 h-16 mx-auto rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-4xl text-gray-800">{item.icon}</span>
                        </div>
                        <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                        <p className="mt-2 text-white text-sm">{item.description}</p>
                        <a href="#" className="mt-3 text-white font-medium inline-block underline">
                            Show More...
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
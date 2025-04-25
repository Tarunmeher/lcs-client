import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TillotammaAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative" data-aos="fade-right">
          <div className="absolute -left-4 -bottom-4 w-full h-full border-l-[10px] border-b-[10px] border-[#7C2D58] z-0"></div>
          <img
            src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/group-of-happy-international-students-posing-outdoors-near-university-building-1536x1025.jpg"
            alt="Students"
            className="relative z-10 rounded-md shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div data-aos="fade-left">
          <h4 className="uppercase text-sm text-gray-600 mb-2 tracking-widest">About Campus</h4>
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            Welcome to Tilottama College Of Science
          </h2>
          <p className="text-gray-600 mb-4">
            Sem feugiat nam diam eu quis placerat amet mollis. Himenaeos blandit montes massa ad luctus.
          </p>
          <p className="text-gray-600 mb-8">
            Aliquet aptent neque scelerisque mollis euismod conubia. Diam pretium scelerisque posuere iaculis curae ligula fusce dictumst etiam fringilla litora.
            Massa ad magna et suspendisse arcu leti us id sed orci.
          </p>

          <button className="bg-[#A4163A] text-white px-6 py-3 rounded-md shadow-md hover:shadow-xl transform hover:translate-y-[-2px] transition duration-300">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default TillotammaAbout;

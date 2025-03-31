import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
    { title: "Scholarship Facility", description: "It is a long established fact that a reader will be distracted." },
    { title: "Skilled Lecturers", description: "It is a long established fact that a reader will be distracted." },
    { title: "Book Library Facility", description: "It is a long established fact that a reader will be distracted." },
    { title: "Affordable Price", description: "It is a long established fact that a reader will be distracted." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/g.png')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h3 className="text-lg font-semibold text-yellow-400" data-aos="fade-up">WELCOME TO EDUKA!</h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-2" data-aos="fade-up" data-aos-delay="200">
          Start Your Beautiful <br /> And <span className="text-yellow-400">Bright</span> Future
        </h1>
        <p className="mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="400">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some repeat predefined chunks.
        </p>
        <div className="mt-6 flex gap-4" data-aos="fade-up" data-aos-delay="600">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">ABOUT MORE →</button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">LEARN MORE →</button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 mt-10 flex justify-center items-center px-6 md:px-20">
        <button onClick={prevSlide} className="absolute left-0 p-2 bg-white rounded-full shadow-md text-black hover:bg-gray-200">
          <FaChevronLeft size={24} />
        </button>

        <div className="w-[80%] md:w-[60%] overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {cards.map((card, index) => (
              <div key={index} className="min-w-full p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up">
                  <div className="text-3xl font-bold text-teal-600">0{index + 1}</div>
                  <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
                  <p className="text-gray-600 mt-1">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="absolute right-0 p-2 bg-white rounded-full shadow-md text-black hover:bg-gray-200">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SliderBanner;
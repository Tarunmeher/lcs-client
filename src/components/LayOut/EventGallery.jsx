import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner from '../../assets/images/banner3.png'

const events = [

];

const galleryImages = [
  import.meta.env.VITE_SERVICE_URL + '/siteimages/class4.jpg',
  import.meta.env.VITE_SERVICE_URL + '/siteimages/office.jpg',
  import.meta.env.VITE_SERVICE_URL + '/siteimages/boyshostel.jpg',
  import.meta.env.VITE_SERVICE_URL + '/siteimages/class2.jpg',
];

export default function EventGallery() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div >
        <h1 className="text-3xl font-bold text-center text-black mb-6" data-aos='fade-down'>Events & Gallery</h1>
      </div>
      <div
        className="flex flex-col md:flex-row p-6 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}

      >
        {/* Event Section */}
        {events.length ? (<motion.div
          className="w-full md:w-1/2 p-4"
          data-aos="fade-right"
        >
          <img
            src={events[currentEvent].img}
            alt={events[currentEvent].title}
            className="w-full h-64 object-cover cursor-pointer rounded-md"
          />
          <h2 className="text-xl text-white font-bold mt-4">{events[currentEvent].title}</h2>
          <p className="text-white font-bold">{events[currentEvent].desc}</p>
          <Link to='/Gallery/lcs-events'>
            <button className="mt-4 px-4 py-2 bg-[#f97316] rounded-lg shadow-md hover:bg-orange-600 text-black hover:text-white font-bold transition">
              View More  →
            </button>
          </Link>
        </motion.div>):(<motion.div
          className="w-full md:w-1/2 p-4"
          data-aos="fade-right"
        >
          <img
            src={`${import.meta.env.VITE_SERVICE_URL}/siteimages/event.jpg`}
            alt={'No Events are Scheduled'}
            className="w-full h-64 object-cover cursor-pointer rounded-md"
          />
          <h2 className="text-xl text-white font-bold mt-4">{'Events not Available'}</h2>
          {/* <Link to='/Gallery/lcs-events'>
            <button className="mt-4 px-4 py-2 bg-[#f97316] rounded-lg shadow-md hover:bg-orange-600 text-black hover:text-white font-bold transition">
              View More  →
            </button>
          </Link> */}
        </motion.div>)}


        {/* Gallery Section */}
        <motion.div
          className="w-full md:w-1/2 p-4"
          data-aos="fade-left"
        >
          <h2 className="text-xl text-white font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 gap-2">
            {galleryImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="Gallery Item"
                className="w-full h-32 object-cover cursor-pointer rounded-md"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
          <Link to='/Gallery/lcs-gallery'>
            <button className="mt-4 px-4 py-2 bg-[#f97316] rounded-lg  shadow-md hover:bg-orange-600 text-black hover:text-white font-bold transition">
              View More  →
            </button>
          </Link>
        </motion.div>
      </div>
    </>

  );
}

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const newsItems = [
  {
    title: "Situation with Gas Today",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet augue leo.",
    image: "https://cdn.pixabay.com/photo/2025/04/08/15/03/fruhling-9521725_1280.jpg",
  },
  {
    title: "Economy Update",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/path-to-your-image.png",
  },
  {
    title: "Tech Industry Boom",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "/path-to-your-image.png",
  },
];

const notifications = [
  "Breaking: Market reaches all-time high.",
  "Weather Alert: Heavy rain expected tomorrow.",
  "New Event: Annual Tech Conference 2025 announced.",
  "Sports: Local team wins championship!",
  "Health: New wellness trends emerging.",
  "Politics: New policy reforms introduced.",
  "Travel: Top destinations for summer 2025.",
];

export default function NewsAndNotifications() {
  const [currentNews, setCurrentNews] = useState(0);
  const notificationRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center" data-aos="fade-down">
        News and Notifications
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* News Slider */}
        <div className="md:w-2/3 w-full relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-right" style={{ height: '400px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNews}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col"
            >
              <img
                src={newsItems[currentNews].image}
                alt={newsItems[currentNews].title}
                className="w-full h-2/3 object-cover rounded-t-xl"
              />
              <div className="p-4 bg-gray-800 text-white flex-1 rounded-b-xl overflow-auto">
                <h2 className="text-2xl font-bold mb-2">{newsItems[currentNews].title}</h2>
                <p className="text-sm">{newsItems[currentNews].content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Notification Scroll */}
        <div className="md:w-1/3 w-full bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left">
          <div className="bg-gray-800 text-white p-3 font-semibold text-center">
            Notifications
          </div>
          <div ref={notificationRef} className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="divide-y divide-gray-200">
              {notifications.map((note, idx) => (
                <li key={idx} className="p-4 hover:bg-gray-50 transition-all">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

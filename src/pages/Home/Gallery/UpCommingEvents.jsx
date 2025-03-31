import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    location: "25/B Milford Road, New York",
    date: "16 June, 2024",
    time: "10.00AM - 04.00PM",
    title: "High School Program 2024",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "25/B Milford Road, New York",
    date: "16 June, 2024",
    time: "10.00AM - 04.00PM",
    title: "High School Program 2024",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "25/B Milford Road, New York",
    date: "16 June, 2024",
    time: "10.00AM - 04.00PM",
    title: "High School Program 2024",
    description:
      "There are many variations of passages the majority have some injected humour.",
  },
];

export default function UpCommingEvents() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="text-center mb-10" data-aos="fade-up">
        <h3 className="text-lg text-orange-500 font-semibold">EVENTS</h3>
        <h2 className="text-4xl font-bold">
          Our Upcoming <span className="text-orange-500">Events</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-2xl shadow-lg" data-aos="zoom-in"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full rounded-lg h-48 object-cover"
            />
            <div className="mt-4">
              <p className="text-gray-600 flex items-center gap-2">
                📍 {event.location}
              </p>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                📅 {event.date} | ⏰ {event.time}
              </p>
              <h3 className="text-xl font-bold mt-2">{event.title}</h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                JOIN EVENT →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { id: 1, src: "https://cdn.pixabay.com/photo/2014/02/21/12/23/human-271221_1280.jpg", colSpan: "col-span-2", rowSpan: "row-span-2" },
  { id: 2, src: "https://cdn.pixabay.com/photo/2015/10/06/13/29/concert-974418_1280.jpg", colSpan: "col-span-2" },
  { id: 3, src: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg" },
  { id: 4, src: "https://cdn.pixabay.com/photo/2017/04/25/22/22/color-2261009_1280.jpg" },
  { id: 5, src: "https://cdn.pixabay.com/photo/2017/08/06/04/56/people-2588899_1280.jpg", colSpan: "col-span-2" },
  { id: 6, src: "https://cdn.pixabay.com/photo/2020/11/15/20/30/violett-5747158_1280.jpg", colSpan: "col-span-2", rowSpan: "row-span-2" },
  { id: 7, src: "https://cdn.pixabay.com/photo/2015/07/20/13/39/event-852833_1280.jpg" },
  { id: 8, src: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg" },
  { id: 9, src: "https://cdn.pixabay.com/photo/2015/10/06/13/28/technology-974413_1280.jpg", colSpan: "col-span-2" },
];

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full bg-[#0e1a36] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-10 text-center" data-aos="fade-up">
          Gallery
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[200px] gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-md ${img.colSpan || ""} ${img.rowSpan || ""}`}
              data-aos="zoom-in"
            >
              <img
                src={img.src}
                alt={`Art ${img.id}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

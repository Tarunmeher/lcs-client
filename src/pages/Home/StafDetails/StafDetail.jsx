import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const staffData = [
    {
        id: 1,
        name: "virat kohli",
        experience: "10 Years",
        profession: "Professor of Physics",
        image: "https://cdn.pixabay.com/photo/2024/05/23/20/18/ai-generated-8783789_1280.jpg",
    },
    {
        id: 2,
        name: "Mr. John Smith",
        experience: "7 Years",
        profession: "Computer Science Lecturer",
        image: "https://cdn.pixabay.com/photo/2024/05/23/20/18/ai-generated-8783789_1280.jpg",
    },
    {
        id: 3,
        name: "kl rahul",
        experience: "5 Years",
        profession: "Librarian",
        image: "https://cdn.pixabay.com/photo/2024/05/23/20/18/ai-generated-8783789_1280.jpg",
    },
    {
        id: 4,
        name: "vaivab sharma",
        experience: "12 Years",
        profession: "Dean of Students",
        image: "https://cdn.pixabay.com/photo/2024/05/23/20/18/ai-generated-8783789_1280.jpg",
    },
];

const StafDetail = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Meet Our Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {staffData.map((staff) => (
                    <div
                        key={staff.id}
                        className="bg-white p-4 rounded-2xl shadow-xl transform transition-transform duration-300 hover:rotate-3 hover:scale-105"
                        data-aos="fade-up"
                    >
                        <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{staff.profession}</p>
                        <p className="text-sm text-gray-400">{staff.experience} Experience</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StafDetail;

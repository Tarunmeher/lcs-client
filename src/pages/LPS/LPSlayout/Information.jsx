import { CalendarDays, BookOpen, Bell } from "lucide-react";

export default function Information() {
    const stats = [
        {
            icon: <CalendarDays className="w-10 h-10 text-white" />,
            title: "FOUNDED 1956",
            description: "Outdoor learning and tending to our school garden is a big part of our day emotional growth and self.",
            bgColor: "bg-yellow-400",
        },
        {
            icon: <BookOpen className="w-10 h-10 text-white" />,
            title: "STUDENTS: 150",
            description: "This age group is playing their way to greater independence, socio-emotional growth and self.",
            bgColor: "bg-pink-500",
        },
        {
            icon: <Bell className="w-10 h-10 text-white" />,
            title: "GRADUATION RATE 100%",
            description: "Children in this classroom are working on forging social skills through collaboration emotional growth and self.",
            bgColor: "bg-blue-400",
        },
    ];

    return (
        <section className="bg-[#1b7343] py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className={`p-4 ${item.bgColor} rounded`}>
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

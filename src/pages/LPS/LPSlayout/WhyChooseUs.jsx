import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
    { title: "Flexibility", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Quality", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Global", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Expertise", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Support", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Certified", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 px-4 text-center">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Why Study Here</h3>
            <h2 className="text-4xl font-semibold mb-4">Why choose Edupreme University?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 perspective">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#1F2E51] text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle className="text-yellow-400" />
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;

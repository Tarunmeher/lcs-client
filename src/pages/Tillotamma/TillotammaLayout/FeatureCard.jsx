// components/FeatureCards.jsx
import React from 'react';

const FeatureCards = () => {
  const cards = [
    {
      title: "University Life",
      description: "Nibh vivamus imperdiet sed odio nullam mi elit pellentesque",
      bgColor: "bg-gray-100",
      textColor: "text-black",
    },
    {
      title: "Skilled Lecturers",
      description: "Nibh vivamus imperdiet sed odio nullam mi elit pellentesque",
      bgColor: "bg-gray-200",
      textColor: "text-black",
    },
    {
      title: "Scholarship Facility",
      description:
        "Nostra nascetur commodo ipsum cubilia ultrices curabitur. Eleifend tempus nec orci conubia mauris dui porta.",
      bgColor: "bg-[#1c2b4b]",
      textColor: "text-white",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} ${card.textColor} flex-1 p-6`}
        >
          <h3 className="text-xl font-semibold border-l-4 border-red-700 pl-2 mb-2">
            {card.title}
          </h3>
          <p className="text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

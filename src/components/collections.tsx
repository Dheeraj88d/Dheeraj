// import React from "react";
import classic from "../../assets/images/serv-arch.png";
import luxury from "../../assets/images/serv-interior.png";
import bright from "../../assets/images/serv-commercial.png"; // Corrected the filename

const Collections = () => {
  const collectionItems = [
    {
      title: "Architectural Design",
      image: classic,
    },
    {
      title: "Interior Design",
      image: luxury,
    },
    {
      title: "Commercial Design",
      image: bright,
    },
  ];

  return (
    <div className="w-full bg-[#222222] text-black py-10 px-5 lg:px-32">
      {/* Heading with full-width lines */}
      <div className="flex items-center justify-center mb-8">
        <div className="border-t border-white flex-1"></div>
        <h2 className="text-center text-white text-2xl font-light mx-4">
          SERVICES WE OFFER
        </h2>
        <div className="border-t border-white flex-1"></div>
      </div>

      {/* Collection Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collectionItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center overflow-hidden shadow-lg shadow-black"
          >
            {/* Image */}
            <div
              className="w-full h-[250px] bg-center bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            {/* Title */}
            <div className="w-full bg-[#262626] text-center py-2 shadow-md">
              <span className="font-light text-white text-lg">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;

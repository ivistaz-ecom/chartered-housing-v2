"use client";
import React from "react";
import Image from "next/image";

const amenitiesData = [
  {
    icon: "/chartered-birdsong/events.svg",
    description: `Clubhouse for recreation and community events`,
  },
  {
    icon: "/chartered-birdsong/pool.svg",
    description: `Swimming pool with changing rooms and party hall`,
  },
  {
    icon: "/chartered-birdsong/parks.svg",
    description: <>Landscaped parks</>,
  },
];

const Amenities = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat lg:py-20 py-10"
      style={{ backgroundImage: "url('/chartered-1956/amenities-bg.png')" }}
    >
      <div className="relative z-10 container mx-auto text-center text-white px-5 md:px-0">
        <h2 className="lg:text-4xl text-2xl font-light lg:mb-12 mb-5 roboto-serif-regular">
          Amenities
        </h2>

        {/* Flex layout */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-8 shadow-lg w-full sm:w-[300px] md:w-[320px] min-h-[200px] flex flex-col items-start justify-start text-start transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-start">
                <Image
                  src={item.icon}
                  alt={item.title || "amenity icon"}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              {item.title && (
                <h5 className="font-bold mb-3 text-[18px]">{item.title}</h5>
              )}
              <h5 className="text-[18px] leading-relaxed whitespace-pre-line">
                {item.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

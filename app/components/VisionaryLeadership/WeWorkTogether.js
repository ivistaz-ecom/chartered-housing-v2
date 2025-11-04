"use client";
import React from "react";
import Image from "next/image";

const WeWorkTogether = () => {
  return (
    <section className="w-full bg-white lg:py-16 py-5">
      <div className="container lg:px-0 px-5 mx-auto  gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-6xl font-bold text-[#ED1C25] leading-snug roboto-serif-light max-w-3xl">
            “We Work Together, 
          </h2>
          <h2 className="text-2xl md:text-6xl font-bold text-[#ED1C25] lg:mb-6 mb-3 leading-snug roboto-serif-light max-w-3xl">
            We Innovate Together”
          </h2>
          <p className="text-[#646464] max-w-2xl">
            Meet our professional team members who’re dedicating themselves to
            create innovation to help people through pushing limitation of the
            technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeWorkTogether;

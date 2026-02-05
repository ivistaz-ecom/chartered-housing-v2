'use client'
import React from "react";
import AboutUs from "../components/AboutUs";
import SeoClient from "../components/Shared/SeoClient";
const page = () => {
  const seoField = {
    title: "Trusted Real Estate Developers in Bangalore | Chartered",
    description: "Discover Chartered Housing’s legacy as one of Bangalore’s best builders, known for quality, transparency, and boutique apartments, villas, and plotted projects.",
    path: "/about-us",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      <AboutUs />
    </div>
  );
};

export default page;

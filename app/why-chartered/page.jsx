'use client'
import React from "react";
import WhyChartered from "../components/WhyChartered";
import SeoClient from "../components/Shared/SeoClient";
const page = () => {
  const seoField = {
    title: "Why Choose Chartered | Best Builders in Bangalore",
    description: "Choose Chartered Housing for trust, transparency, and quality. One of Bangalore’s top builders for boutique apartments, premium villas, and plotted developments.",
    path: "/why-chartered",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      <WhyChartered />
    </div>
  );
};  

export default page;

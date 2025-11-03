import React from "react";
import Home from "./components/Home";
import NextSeo from "./components/Shared/Seo";

const page = () => {
  const seoField = {
    title: "Chartered Housing | The Standard for Excellence in Ship Management",
    description:
      "For over 17 years, Nautilus Shipping has provided reliable ship management services, including technical management, crew management, inspections, and commercial solutions. With 200+ ships manned and 100,000+ seafarers in our network, we deliver maritime excellence globally.",
    path: "/",
  }

  return (
    <>    
    <NextSeo {...seoField} />
      <Home />
    </>
  );
};

export default page;

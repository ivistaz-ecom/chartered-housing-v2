import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import ProjectDetails from "./ProjectDetails";
import BusinessForm from "./BusinessForm";

const Commercial = () => {
  return (
    <div>
      <Banner
        backgroundImage="/commercial/banner.png"
        mobileBackgroundImage="/commercial/mobile-banner.png"
        sectionTitle="Commercial Projects"
        title="The Crossroads of"
        subtitle="Access and Opportunity"
      />
      <BreadCrumbs title="Commercial Projects" />
      <Content />
      <ProjectDetails />
      <BusinessForm />
    </div>
  );
};

export default Commercial;

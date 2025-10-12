import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import ProjectOverview from "./ProjectOverview";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsMobile from "./ProjectDetailsMobile";
const Chartered1956 = () => {
  return (
    <div>
      <Banner
        backgroundImage="/chartered-1956/banner.png"
        mobileBackgroundImage="/chartered-1956/mobile-banner.png"
        sectionTitle="CHARTERED 1956"
        title="A timeless residence where"
        subtitle="royal heritage meets refined modern living"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Chartered 1956" />
      <Content />
      {/* <ProjectOverview /> */}
      <ProjectDetails />
      <ProjectDetailsMobile />
    </div>
  );
};

export default Chartered1956;

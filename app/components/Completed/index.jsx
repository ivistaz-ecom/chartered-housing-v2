import Completed from "./Completed";
import OurLocations from "./OurLocations";
import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import OurLocationsMobile from "./OurLocationsMobile";

const index = () => {
  return (
    <>
      <Banner
        backgroundImage="/completed-project/banner.webp"
        mobileBackgroundImage="/completed-project/mobile-banner.webp"
        sectionTitle="COMPLETED PROJECTS"
        title="Remembered for generations."
        subtitle="Every project we complete is a testament to a promise fulfilled."
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Completed Projects" />
      <Content />
      <Completed />
      <OurLocations />
      <OurLocationsMobile />
    </>
  );
};

export default index;

import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import Grid from "./Grid";

const UpcomingProjects = () => {
  return (
    <>
      <Banner
        backgroundImage="/about-us/banner.png"
        mobileBackgroundImage="/about-us/mobile-banner.png"
        logo="/logo.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="UPCOMING PROJECTS"
        title="Shaping the Future,"
        subtitle="One Landmark at a Time"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Upcoming Projects" />
      <Content />
      <Grid />
    </>
  );
};

export default UpcomingProjects;

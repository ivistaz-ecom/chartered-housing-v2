import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import Grid from "./Grid";

const OngoingProjects = () => {
  return (
    <>
      <Banner
        backgroundImage="/ongoing-project/banner.png"
        mobileBackgroundImage="/ongoing-project/mobile-banner.png"
        sectionTitle="ONGOING PROJECTS"
        title="Crafted Spaces,"
        subtitle="Currently Taking Shape"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Ongoing Projects" />
      <Content />
      <Grid />
    </>
  );
};

export default OngoingProjects;

import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";

const Chartered1956 = () => {
  return (
    <div>
      <Banner
        backgroundImage="/chartered-1956/banner.png"
        mobileBackgroundImage="/chartered-1956/mobile-banner.png"
        sectionTitle="CHARTERED 1956"
        title="Chartered 1956"
        subtitle="A Legacy of Excellence"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Chartered 1956" />
    </div>
  );
};

export default Chartered1956;

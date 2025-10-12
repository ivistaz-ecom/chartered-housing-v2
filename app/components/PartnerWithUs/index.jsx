import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import OurIdealPartners from "./OurIdealPartners";
import WeBringToTheTable from "./WeBringToTheTable";
import SendUsYourQuery from "./SendUsYourQuery";

const index = () => {
  return (
    <div>
      <Banner
        backgroundImage="/partner-with-us/banner.png"
        mobileBackgroundImage="/partner-with-us/mobile-banner.png"
        sectionTitle="PARTNER WITH US"
        title="Let’s Build"
        subtitle="Something Enduring Together"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <div className="max-w-7xl mx-auto">
      <BreadCrumbs title="Partner With Us" />
      </div>
      <SendUsYourQuery />
      <OurIdealPartners />
      <WeBringToTheTable />
    </div>
  );
};

export default index;

import React from "react";
import dynamic from "next/dynamic";
import Banner from "../Shared/Banner";
import Content from "./Content";

// Dynamically import below-the-fold components to reduce initial bundle size
const ProjectsSection = dynamic(() => import("./ProjectsSection"), {
  loading: () => <div className="min-h-[400px]" />, // Placeholder to prevent layout shift
});

const StatsSection = dynamic(() => import("./StatsSection"), {
  loading: () => <div className="min-h-[300px]" />,
});

// SuccessStories contains YouTube iframe - load it last to defer YouTube scripts
const SuccessStories = dynamic(() => import("./SuccessStories"), {
  loading: () => <div className="min-h-[600px]" />,
});

const index = () => {
  return (
    <>
      <div className="">
      <Banner
        backgroundImage="/home/phone-banner.webp"   // 👈 fallback image for desktop
        mobileBackgroundImage="/home/phone-banner.webp" // 👈 fallback image for mobile
        title={false}
        subtitle={false}
        // textPosition="bottom-left"
        overlayOpacity={0.2}
        showDivide={false}
        useVideo={true}
        backgroundVideo="/videos/Chattered-Banner.webm"
        backgroundVideoSafari="/videos/video-banner.mp4"
        mobileBackgroundVideo="/videos/mobile-video.webm"
        mobileBackgroundVideoSafari="/videos/phone-banner-02.mp4"
      />
      </div>
      <Content />
      <ProjectsSection />
      <StatsSection />
      <SuccessStories />
    </>
  );
};

export default index;

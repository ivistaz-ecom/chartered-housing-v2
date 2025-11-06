import Image from "next/image";
import React from "react";

const AboutChartered = () => {
  return (
    <>
      <div className="lg:px-0 px-5 lg:pb-20 pb-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="lg:w-1/2 w-full">
          <Image
              src="/chartered-interiors/about-chartered.webp"
              alt="About Chartered"
              width={1000}
              height={1000}
            />
          </div>
            <div className="flex flex-col lg:gap-5 gap-2 items-start justify-center lg:w-1/2 w-full">
              <h1 className="lg:text-2xl text-xl font-light text-[#646464] uppercase roboto-serif-light">
                ABOUT CHARTERED INTERIORS 
              </h1>
              <h4 className="lg:text-4xl text-2xl roboto-serif-light text-[#ED1C25]">
                Thoughtful Interiors, <br className="hidden lg:block"/> Seamlessly Delivered
              </h4>
              <p className="pt-0">
                With over a decade of experience in design and real estate,
                Chartered Interiors offers a detail-oriented, transparent
                approach to interiors. From spatial planning to the finishing
                touches, we take care of it all, so your space not only looks
                good but works well.
              </p>
              <p>
                Led by Mr. A. Balakrishna Hegde and Bhakti Hegde, our interiors
                reflect warmth, functionality, and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutChartered;

"use client";

import dynamic from "next/dynamic";

// Load the real SEO component client-side only
const NextSeo = dynamic(() => import("./Seo"), {
  ssr: false,
});

export default function SeoClient(props) {
  return <NextSeo {...props} />;
}

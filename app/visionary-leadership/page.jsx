'use client'
import React from 'react'
import VisionaryLeadership from '../components/VisionaryLeadership'
import SeoClient from '../components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Visionary Leadership | Leading Builders in Bangalore  ",
    description: "Meet the visionary leadership behind Chartered Housing. Trusted builders in Bangalore who deliver premium homes, luxury apartments, and exclusive villa projects.",
    path: "/visionary-leadership",
  }
  return (
    <>
      <SeoClient {...seoField} />
      <VisionaryLeadership />
    </>
  )
};
export default page

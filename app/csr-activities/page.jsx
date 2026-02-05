'use client'
import React from 'react'
import CsrActivities from '../components/CsrActivities'
import SeoClient from '../components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "CSR by Chartered | Trusted Builders in Bangalore",
    description: "As a trustworthy real estate developer in Bangalore, Chartered leads with transparency. Discover how our CSR activities give back and build stronger communities.",
    path: "/csr-activities",
  }
  return (
    <div>
      <SeoClient {...seoField} />
     <CsrActivities /> 
    </div>
  )
};

export default page;

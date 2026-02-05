'use client'
import Completed from '@/app/components/Completed'
import React from 'react'
import SeoClient from '@/app/components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Completed Projects | Trusted Builders in Bangalore",
    description: "Explore completed projects by Chartered Housing, trusted builders in Bangalore. A leading real estate firm in Bengaluru known for quality and timely delivery.",
    path: "/projects/completed",
  }
  return (
    <>
      <SeoClient {...seoField} />
      <Completed />
    </>
  )
}

export default page

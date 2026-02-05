'use client'
import React from 'react'
import UpcomingProjects from '@/app/components/UpcomingProjects'
import SeoClient from '@/app/components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Upcoming Projects | Chartered Housing Bangalore",
    description: "Explore boutique 2 & 3 BHK apartments, premium row villas, and residential plots in prime Bangalore locations. Luxury, comfort, and lasting value await.",
    path: "/projects/upcoming",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      <UpcomingProjects/>
    </div>
  )
}

export default page

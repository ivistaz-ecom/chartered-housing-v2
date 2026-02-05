'use client'
import React from 'react'
import CharteredInteriors from '../components/CharteredInteriors'
import SeoClient from '../components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Chartered Interiors | Boutique & Luxury Apartments",
    description: "Discover boutique apartments in Bengaluru with stylish interiors. Explore luxury residences and premium apartments in Bangalore with advanced fire safety systems.",
    path: "/chartered-interiors",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      <CharteredInteriors />
    </div>
  )
}

export default page

'use client'
import React from 'react'
import Commercial from '../../components/Commercial'
import SeoClient from '@/app/components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Commercial Projects | Leading Builders in Bangalore",
    description: "Explore commercial spaces by a builder with quality and trust in Bangalore. Chartered stands as a leading real estate firm in Bengaluru, delivering valu",
    path: "/projects/commercial",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      <Commercial />
    </div>
  )
}

export default page

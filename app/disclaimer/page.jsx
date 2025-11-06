import React from 'react'
import Disclaimer from '../components/Disclaimer'
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Disclaimer | Chartered Housing",
    description: "Disclaimer for Chartered Housing",
    path: "/disclaimer",
  }
  return (
    <div>   
      <NextSeo {...seoField} />
      <Disclaimer />
    </div>
  )
}

export default page

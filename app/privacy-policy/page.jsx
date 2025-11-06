import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Privacy Policy | Chartered Housing",
    description: "Privacy Policy for Chartered Housing",
    path: "/privacy-policy",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <PrivacyPolicy /> 
    </div>
  )
}

export default page

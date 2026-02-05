'use client'
import PartnerWithUs from "@/app/components/PartnerWithUs"
import SeoClient from '@/app/components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Partner with Chartered | Trusted Builders in Bangalore",
    description: "Join hands with a trustworthy real estate developer in Bangalore. Chartered, among the top builders, offers luxury flats & premium plotted developments.",
    path: "/partner-with-us",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      <PartnerWithUs />
    </div>
  )
}

export default page

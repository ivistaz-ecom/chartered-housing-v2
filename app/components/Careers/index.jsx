import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs'
import Content from './Content'
import ApplyForm from './ApplyForm'
const Careers = () => {
  return (
    <div>
      <Banner
        backgroundImage="/careers/banner.webp"
        mobileBackgroundImage="/careers/mobile-banner.webp"
        sectionTitle="CAREERS"
        title="Build More Than a Career"
        subtitle="Build Legacy"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Careers" />
      <Content />
      <ApplyForm />
    </div>
  )
}

export default Careers

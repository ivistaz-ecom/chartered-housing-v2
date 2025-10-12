import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs'
import Content from './Content'
import ApplyForm from './ApplyForm'
const Careers = () => {
  return (
    <div>
      <Banner
        backgroundImage="/careers/banner.png"
        mobileBackgroundImage="/careers/mobile-banner.png"
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

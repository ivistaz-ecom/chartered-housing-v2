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
        title="Join Our Team"
        subtitle="We're always looking for talented individuals to join our team. If you're interested in working with us, please send us your CV."
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

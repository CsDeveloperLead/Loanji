import React from 'react'
import LandingPage from './HomeComponents/LandingPage'
import ScrollBanner from './HomeComponents/ScrollBanner'
import WhyChooseUs from './HomeComponents/WhyChooseUs'
import CaseStudies from './HomeComponents/CaseStudies'
import Section3 from './HomeComponents/Section3'
import Updates from './HomeComponents/Updates'

function Home() {
  return (
    <div className='w-full h-auto flex flex-col'>
      <LandingPage />
      <ScrollBanner />
      <WhyChooseUs />
      <CaseStudies />
      <Section3 />
      <Updates />
    </div>
  )
}

export default Home
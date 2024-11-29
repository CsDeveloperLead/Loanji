import React from 'react'
import LandingPage from './HomeComponents/LandingPage'
import ScrollBanner from './HomeComponents/ScrollBanner'
import WhyChooseUs from './HomeComponents/WhyChooseUs'
import CaseStudies from './HomeComponents/CaseStudies'

function Home() {
  return (
    <div className='w-full h-auto flex flex-col'>
      <LandingPage />
      <ScrollBanner />
      <WhyChooseUs />
      <CaseStudies />
    </div>
  )
}

export default Home
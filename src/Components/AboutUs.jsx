import React from 'react'
import Section1 from './AboutPageComponent/Section1'
import Stats from './AboutPageComponent/Stats'
import TaxServices from './AboutPageComponent/TaxServices'
import FinancialCompanies from './AboutPageComponent/FinancialCompanies'
import Faqs from './AboutPageComponent/Faqs'


function AboutUs() {
    return (
        <div className='w-full h-auto flex flex-col px-4 sm:px-5 md:px-10 xl:px-20 pb-10'>
            <Section1 />
            <Stats />
            <TaxServices />
            <FinancialCompanies />
            <Faqs />
        </div>
    )
}

export default AboutUs
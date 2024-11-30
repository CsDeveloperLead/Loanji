import React from 'react'
import Section1 from './ContactPageComponents/Section1'

function ContactUsPage() {
  return (
    <div className='w-full h-auto flex flex-col'>
        <Section1 />
        <div className='w-[90%] h-auto mx-auto my-10'>
          <img src="" alt="" className='bg-[#D9D9D9] rounded-3xl h-40 sm:h-72 md:h-96 xl:h-[450px]' />
        </div>
    </div>
  )
}

export default ContactUsPage
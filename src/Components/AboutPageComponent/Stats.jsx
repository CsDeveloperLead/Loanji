import React from 'react'

function Stats() {
  return (
    <div className='w-full h-auto my-10 grid grid-cols-2 gap-1 text-[#292833] sm:grid-cols-4 xl:my-20'>
        <div className='w-auto h-auto p-4 flex flex-col border-r-2 gap-1 md:px-10 lg:px-12 xl:px-14 xl:gap-3 2xl:px-20'>
            <h1 className='text-4xl font-bold font-jakarta lg:text-5xl'>2.1M+</h1>
            <span className='font-dmSans text-sm sm:text- md:text-sm xl:text-base'>Active Users Product On Create</span>
        </div>
        <div className='w-auto h-auto p-4 flex flex-col gap-1 sm:border-r-2 md:px-10 lg:px-12 xl:px-14 xl:gap-3 2xl:px-20'>
            <h1 className='text-4xl font-bold font-jakarta lg:text-5xl'>120+</h1>
            <span className='font-dmSans text-sm sm:text-xs md:text-sm xl:text-base'>We Complete Along The Way</span>
        </div>
        <div className='w-auto h-auto p-4 flex flex-col border-r-2 gap-1 md:px-10 lg:px-12 xl:px-14 xl:gap-3 2xl:px-20'>
            <h1 className='text-4xl font-bold font-jakarta lg:text-5xl'>18Y</h1>
            <span className='font-dmSans text-sm sm:text-xs md:text-sm xl:text-base'>Of Services & Operations </span>
        </div>
        <div className='w-auto h-auto p-4 flex flex-col gap-1 md:px-10 lg:px-12 xl:px-14 xl:gap-3 2xl:px-20'>
            <h1 className='text-4xl font-bold font-jakarta lg:text-5xl'>$7.5B</h1>
            <span className='font-dmSans text-sm sm:text-xs md:text-sm xl:text-base'>We turn your ideas into reality</span>
        </div>
    </div>
  )
}

export default Stats
import React from 'react'

function ServiceDetailsPage() {
    return (
        <div className='w-full h-auto flex pt-20 md:pt-24 xl:pt-32 flex-col my-5 gap-4 xl:gap-8'>
            <img src="" alt="" className='w-[90%] h-48 bg-gray-400 rounded-3xl mx-auto sm:h-60 md:h-80 lg:w-[80%] lg:h-96 xl:h-[400px]' />
            <div className='w-full h-auto flex flex-col px-5 sm:px-10 md:px-28 xl:px-36 2xl:px-40'>
                <h1 className='text-[#292833] font-bold font-jakarta text-xl sm:text-2xl md:text-3xl'>Loan Services</h1>
                <p className='text-xs my-4 lg:text-sm 2xl:text-base text-[#292833] font-dmSans font-normal'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden  Sydney College in Virginia. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                <div className='w-full h-auto flex flex-col my-3 gap-4 sm:flex-row lg:gap-20 lg:my-6'>
                    <img src="" alt="" className='w-full h-52 bg-gray-400 rounded-2xl mx-auto xl:h-80' />
                    <img src="" alt="" className='w-full h-52 bg-gray-400 rounded-2xl mx-auto xl:h-80' />
                </div>
                <p className='text-xs my-4 lg:text-sm 2xl:text-base text-[#292833] font-dmSans font-normal'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hichard McClintock, a Latin professor at Hampden  Sydney College in Virginia.</p>
            </div>
        </div>
    )
}

export default ServiceDetailsPage
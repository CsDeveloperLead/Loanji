import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

function WhyChooseUs() {
    return (
        <div className='w-full h-auto flex flex-col my-10 px-5 gap-4 md:flex-row md:my-20 lg:px-10 lg:justify-between lg:gap-0 xl:px-20'>
            <div className='w-full h-auto flex flex-col gap-3 lg:w-[50%] xl:w-[45%]'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#003140]'>Why You Choose Us !</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-40 h-0.5 bg-[#003140] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[150px] text-[#003140]' />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-2'>
                    <p className='text-3xl font-semibold font-jakarta md:text-4xl lg:text-5xl'>Compelling Reasons <span className='text-[#08AABD]'>Why</span></p>
                    <p className='text-3xl font-semibold font-jakarta md:text-4xl lg:text-5xl'><span className='text-[#08AABD]'>You Might</span> Choose</p>
                </div>
                <div className='w-full h-auto flex flex-col gap-4 mt-5'>
                    <div className='w-full h-auto flex py-3 font-dmSans gap-2 md:py-4'>
                        <div className='w-auto h-auto flex-shrink-0'>
                            <IoCheckmarkDoneCircleOutline size={30} className='xl:size-9'/>
                        </div>
                        <div className='w-auto h-auto flex flex-1 flex-col md:gap-2 xl:gap-5'>
                            <span className='text-lg font-[500]'>Track Your Payment Method</span>
                            <span className='text-xs text-[#292833] xl:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking</span>
                        </div>
                    </div>
                    <div className='w-full h-auto flex py-3 font-dmSans gap-2 bg-[#F8F8FF] px-4 md:py-4'>
                        <div className='w-auto h-auto flex-shrink-0'>
                            <IoCheckmarkDoneCircleOutline className='text-[#08AABD] xl:size-9' size={30} />
                        </div>
                        <div className='w-auto h-auto flex flex-1 flex-col md:gap-2 xl:gap-5'>
                            <span className='text-lg font-[500] text-[#08AABD]'>Easy Online Transaction</span>
                            <span className='text-xs text-[#292833] xl:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking </span>
                        </div>
                    </div>
                    <div className='w-full h-auto flex py-3 font-dmSans gap-2 md:py-4'>
                        <div className='w-auto h-auto flex-shrink-0'>
                            <IoCheckmarkDoneCircleOutline size={30} className='xl:size-9'/>
                        </div>
                        <div className='w-auto h-auto flex flex-1 flex-col md:gap-2 xl:gap-5'>
                            <span className='text-lg font-[500]'>Complete Your Transaction</span>
                            <span className='text-xs text-[#292833] xl:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-full h-auto flex flex-col md:justify-between lg:w-[45%]'>
                <p className='text-sm font-dmSans text-[#292833] lg:px-10 lg:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted</p>
                <img src="" alt="" className='bg-gray-400 w-full h-80 mt-14 rounded-3xl md:h-96 xl:h-[450px]' />
            </div>
        </div>
    )
}

export default WhyChooseUs
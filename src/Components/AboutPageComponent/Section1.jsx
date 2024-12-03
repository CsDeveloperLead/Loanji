import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { MdOutlineStarPurple500 } from "react-icons/md";

function Section1() {
    return (
        <div className='w-full h-auto flex flex-col mt-20 md:mt-24 xl:mt-32 gap-5 md:flex-row-reverse md:justify-between'>
            <div className='w-full h-auto flex flex-col gap-2 md:w-[50%]'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#0159A5]'>About Us</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-16 h-0.5 bg-[#0159A5] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[56px] text-[#0159A5]' />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-3 sm:gap-5 md:gap-3 lg:gap-5 lg:mb-5 xl:gap-6 xl:mb-8'>
                    <h1 className='text-2xl font-bold text-[#292833] font-jakarta sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl'>Financial Tax & <span className='text-[#0159A5]'>Strategic</span> Fields</h1>
                    <p className='text-[#292833] font-dmSans text-sm sm:text-base md:text-sm lg:text-base xl:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <div className='w-full h-auto flex justify-between my-5 sm:justify-start sm:gap-5 lg:my-0 xl:gap-20 font-dmSans'>
                        <div className='w-auto h-auto flex flex-col text-xs gap-3 sm:text-sm md:text-xs lg:text-sm xl:gap-5 xl:text-base'>
                            <span className='flex gap-1 font-bold text-[#292833] items-center'>
                                <IoIosCheckmarkCircleOutline size={15} className='lg:size-5' />
                                Online Support
                            </span>
                            <span className='flex gap-1 font-bold text-[#292833] items-center'>
                                <IoIosCheckmarkCircleOutline size={15} className='lg:size-5' />
                                Quality Services
                            </span>
                            <span className='flex gap-1 font-bold text-[#292833] items-center'>
                                <IoIosCheckmarkCircleOutline size={15} className='lg:size-5' />
                                Financial Loan
                            </span>
                        </div>
                        <div className='w-auto h-auto flex flex-col text-xs gap-3 sm:text-sm md:text-xs lg:text-sm xl:gap-5 xl:text-base'>
                            <span className='flex gap-1 font-bold text-[#292833] items-center'>
                                <IoIosCheckmarkCircleOutline size={15} className='lg:size-5' />
                                Expert Team
                            </span>
                            <span className='flex gap-1 font-bold text-[#292833] items-center'>
                                <IoIosCheckmarkCircleOutline size={15} className='lg:size-5' />
                                Best Tax Preventation
                            </span>
                            <span className='flex gap-1 font-bold text-[#292833] items-center'>
                                <IoIosCheckmarkCircleOutline size={15} className='lg:size-5' />
                                Extra Fund Finance
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-2 sm:items-center sm:flex-row sm:gap-4 md:flex-col md:justify-start lg:flex-row'>
                    <div className='w-full h-full flex sm:w-auto md:h-auto md:w-full lg:w-auto'>
                        <NavLink to='/' className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-[500] font-dmSans px-3 py-2 rounded-xl flex gap-3 items-center active:bg-[#08abbd3d] cursor-pointer md:hover:bg-[#08abbd3d] md:py-2 xl:px-5 xl:text-lg'>Free Consultation <LuMoveRight size={20} /></NavLink>
                    </div>
                    <div className='w-full h-auto flex gap-28 sm:w-auto mt-5 sm:mt-0 md:w-full lg:w-auto'>
                        <div className='w-auto h-auto flex relative items-center'>
                            <img src="" alt="" className='w-14 h-14 rounded-full border-2 border-white bg-gray-500' />
                            <img src="" alt="" className='w-14 h-14 rounded-full border-2 border-white left-8 absolute bg-gray-500' />
                            <img src="" alt="" className='w-14 h-14 rounded-full border-2 border-white absolute left-[65px] bg-gray-500' />
                            <span className='w-14 h-14 rounded-full absolute border-2 border-white left-[90px] font-dmSans bg-[#EEA69F] flex justify-center items-center'>
                                4.1k
                            </span>
                        </div>
                        <div className='w-auto h-auto flex flex-col gap-2'>
                            <div className='w-auto h-auto flex'>
                                {
                                    ['1', '1', '1', '1', '0'].map((star, index) => (
                                        <MdOutlineStarPurple500 key={index} size={20} className={`${star === '1' ? 'text-yellow-500' : 'text-[#292833]'}`} />
                                    ))
                                }
                            </div>
                            <p className='font-dmSans text-sm'>Trusted over 120,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex mx-auto md:w-[48%] md:mx-0 xl:w-[46%]'>
                <img src="" alt="" className='bg-[#F1F1F9] w-full object-cover h-[300px] md:h-full' />
            </div>
        </div>
    )
}

export default Section1
import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

function Updates() {
    return (
        <div className='w-full h-auto flex flex-col mb-10 lg:my-20'>
            <div className='w-full h-auto flex flex-col gap-4 lg:flex-row lg:gap-0 xl:px-10'>
                <div className='w-full h-auto flex flex-col px-5 gap-2 lg:w-[40%]'>
                    <div className='w-auto h-auto flex flex-col'>
                        <span className='font-dmSans font-[500] text-[#0C162A]'>Our Daily Updates</span>
                        <div className='w-auto h-5 flex items-center relative'>
                            <span className='w-36 h-0.5 bg-[#0C162A] rounded-sm'></span>
                            <LuMoveRight size={25} className='absolute left-[140px] text-[#003140]' />
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col font-jakarta font-bold gap-1 lg:gap-2 xl:gap-4'>
                        <h1 className='text-[#292833] text-3xl lg:text-4xl xl:text-5xl'>Articles<span className='text-[#0159A5]'> & Loan News</span></h1>
                        <h1 className='text-[#292833] text-3xl lg:text-4xl xl:text-5xl'>Updates</h1>
                        <p className='text-[#292833] font-normal text-sm mt-3 lg:text-base lg:mt-5 xl:pr-10'>It is a long established fact that a reader will be by the readable content of a page when looking </p>
                    </div>
                    <NavLink to='/' className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-medium w-52 my-6 font-dmSans px-3 py-2 rounded-xl flex gap-3 items-center active:bg-[#08abbd3d] cursor-pointer md:hover:bg-[#08abbd3d] xl:px-5 xl:w-[230px] xl:text-lg'>View All Our Blogs <LuMoveRight size={20} /></NavLink>
                </div>
                <div className='w-full h-auto grid grid-cols-1 place-items-center gap-6 sm:w-[60%] sm:mx-auto md:w-[80%] md:grid-cols-2 lg:w-[60%] xl:w-[55%] 2xl:w-[50%]'>
                    <div className='w-[90%] h-auto flex flex-col gap-3'>
                        <div className='w-full h-auto relative'>
                            <img src="" alt="" className='w-full h-52 rounded-xl bg-[#D6D6EB]' />
                            <span className='absolute top-0 bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-medium m-3 font-dmSans px-3 py-2 text-sm rounded-xl flex gap-3 items-center cursor-pointer xl:text-base'>Tax Serives <LuMoveRight size={20} /></span>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-3'>
                            <div className='w-full h-auto flex items-center gap-2'>
                                <span className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-medium font-dmSans px-5 py-1 xl:py-1.5 text-sm rounded-full flex gap-3 items-center cursor-pointer'>Business</span>
                                <span className='text-[#292833] text-xs font-normal lg:text-sm'>19.06.2024</span>
                            </div>
                            <h1 className='text-[#292833] font-dmSans font-bold'>Daily movements in major indices like the Dow Jones, S&P 500</h1>
                            <p className='text-[#292833] font-dmSans font-normal text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                        </div>
                    </div>
                    <div className='w-[90%] h-auto flex flex-col gap-3'>
                        <div className='w-full h-auto relative'>
                            <img src="" alt="" className='w-full h-52 rounded-xl bg-[#D6D6EB]' />
                            <span className='absolute top-0 bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-medium m-3 font-dmSans px-3 py-2 text-sm rounded-xl flex gap-3 items-center cursor-pointer xl:text-base'>Finance <LuMoveRight size={20} /></span>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-3'>
                            <div className='w-full h-auto flex items-center gap-2'>
                                <span className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-medium font-dmSans px-5 py-1 xl:py-1.5 text-sm rounded-full flex gap-3 items-center cursor-pointer'>Business</span>
                                <span className='text-[#292833] text-xs font-normal lg:text-sm'>19.06.2024</span>
                            </div>
                            <h1 className='text-[#292833] font-dmSans font-bold'>GDP growth, unemployment rates, inflation, and consumer spending.</h1>
                            <p className='text-[#292833] font-dmSans font-normal text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updates
import React from 'react'
import Marquee from 'react-fast-marquee';
import Graph from '../../assets/HomePageImages/Section3Images/graph.png'
import { LuMoveRight } from "react-icons/lu";
import { BsArrowUpRightCircle } from "react-icons/bs";

function Section3() {
    return (
        <div className='w-full h-auto flex flex-col my-10 gap-10'>
            <Marquee direction='left' speed={100} className='text-[#0C162A] text-5xl font-jakarta font-bold md:text-6xl' style={{ wordSpacing: '1rem' }} >
                Financial Consultancy & <span className='text-[#A8A6C9] mx-3'>Analysis,</span> <p className='w-32 h-16 md:h-[75px] bg-[#D6D6EB] rounded-[255px] mx-3'></p> Tax <span className='text-[#A8A6C9] mx-3'>Loan.</span>
            </Marquee>
            <div className='w-full h-auto flex flex-col my-7 px-5 gap-4 md:flex-row lg:justify-center lg:px-10 xl:mt-20'>
                <div className='w-[95%] flex justify-center items-center h-[400px] mx-auto relative sm:w-[70%] md:w-[50%] md:h-auto lg:w-[45%] xl:justify-start xl:h-[550px]'>
                    <img src="" alt="" className='w-[90%] h-[340px] md:h-full rounded-3xl bg-gray-200 relative z-10 xl:w-[90%] xl:h-full' />
                    <div style={{ boxShadow: '4px 4px 20px 0px #00000026' }} className='w-40 h-[160px] flex flex-col absolute -top-8 left-3 bg-white gap-2 px-4 py-2 z-50 rounded-xl lg:left-5 xl:left-7'>
                        <h1 className='text-center font-jakarta font-[600]'>Saving Growth</h1>
                        <div className='w-full h-auto relative flex justify-center items-center'>
                            <p className='border-[10px] border-[#11223B] h-20 w-20 flex justify-center items-center rounded-full'>
                                <span className='relative z-50 text-[#11223B]'>75%</span>
                            </p>
                            <span className='w-10 h-10 bg-white absolute top-0 left-5 z-10'></span>
                        </div>
                        <p className='text-center font-jakarta font-[600]'>0 - 80%</p>
                    </div>
                    <div style={{ boxShadow: '4px 4px 20px 0px #00000026' }} className='hidden lg:w-56 lg:h-[160px] lg:flex lg:flex-col lg:absolute lg:-bottom-8 lg:right-0 xl:right-5 lg:bg-white lg:gap-2 lg:px-4 lg:py-2 lg:z-50 lg:rounded-xl'>
                        <h1 className='text-center font-jakarta font-[600]'>Monthly Payment Status</h1>
                        <img src={Graph} alt="Grpah Image" />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-3 md:w-[50%] lg:w-[45%]'>
                    <div className='w-auto h-auto flex flex-col'>
                        <span className='font-dmSans font-[500] text-[#0C162A]'>Features</span>
                        <div className='w-auto h-5 flex items-center relative'>
                            <span className='w-16 h-0.5 bg-[#0C162A] rounded-sm'></span>
                            <LuMoveRight size={25} className='absolute left-[60px] text-[#003140]' />
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 font-jakarta lg:gap-3'>
                        <h1 className='text-2xl text-[#292833] font-bold md:text-3xl lg:text-4xl xl:text-5xl'>Financial Profits &</h1>
                        <h1 className='text-2xl text-[#292833] font-bold md:text-3xl lg:text-4xl xl:text-5xl'><span className='text-[#0159A5]'>Industry</span> Accreditations</h1>
                        <p className='text-[#292833] text-sm mt-3 md:text-base xl:pr-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='w-full h-auto flex flex-col mt-2 font-dmSans xl:mt-0'>
                        <div className='w-full h-auto flex items-center gap-5 py-5 text-[#292833] border-b-[1px] border-b-[#29283333] xl:py-7'>
                            <BsArrowUpRightCircle size={25} />
                            <span className='text-xl font-[500] xl:text-2xl'>Business Analysis</span>
                        </div>
                        <div className='w-full h-auto flex items-center gap-5 py-5 text-[#292833] border-b-[1px] border-b-[#29283333] xl:py-7'>
                            <BsArrowUpRightCircle size={25} />
                            <span className='text-xl font-[500] xl:text-2xl'>Business Achievements</span>
                        </div>
                        <div className='w-full h-auto flex items-center gap-5 py-5 text-[#292833] border-b-[1px] border-b-[#29283333] xl:py-7'>
                            <BsArrowUpRightCircle size={25} />
                            <span className='text-xl font-[500] xl:text-2xl'>Business Profit Earned</span>
                        </div>
                        <div className='w-full h-auto flex items-center gap-5 py-5 text-[#292833] border-b-[1px] border-b-[#29283333] xl:py-7'>
                            <BsArrowUpRightCircle size={25} />
                            <span className='text-xl font-[500] xl:text-2xl'>Business loss Ingredients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section3
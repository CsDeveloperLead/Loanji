import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { MdOutlineStarPurple500 } from "react-icons/md";
import Card1 from '../../assets/HomePageImages/LandingPageImages/card1.png'
import Card2 from '../../assets/HomePageImages/LandingPageImages/card2.png'
import Small1 from '../../assets/HomePageImages/LandingPageImages/small1.png'
import Small2 from '../../assets/HomePageImages/LandingPageImages/small2.png'
import Small3 from '../../assets/HomePageImages/LandingPageImages/small3.png'
import Small4 from '../../assets/HomePageImages/LandingPageImages/small4.png'


function LandingPage() {
    return (
        <div className='w-full h-auto mt-12 md:mt-14 xl:mt-24 flex flex-col px-5 py-10 sm:px-20 md:px-5 md:flex-row lg:px-20'>
            <div className='w-full h-auto flex flex-col gap-4 md:w-[50%] lg:w-[60%] xl:w-[55%]'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#0C162A]'>Finance Services</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-32 h-0.5 bg-[#0C162A] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[120px] text-[#003140]' />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-2'>
                    <p className='text-3xl font-semibold font-jakarta md:text-4xl lg:text-5xl 2xl:text-6xl'>Manage Your <span className='text-[#0159A5]'>Financial</span></p>
                    <p className='text-3xl font-semibold font-jakarta md:text-4xl lg:text-5xl 2xl:text-6xl'>Services by Single Swap</p>
                    <p className='font-dmSans text-sm mt-5 lg:pr-40 xl:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='w-full h-auto mt-5 xl:mt-10'>
                    <div className='w-auto h-auto flex items-center gap-4'>
                        <NavLink to='/' className='bg-[#0159A5] font-[500] font-dmSans text-white px-3 py-2 rounded-xl flex gap-3 items-center active:bg-[#0158a5ce] cursor-pointer md:hover:bg-[#0158a5ce] xl:px-5 xl:text-lg'>Get Started <LuMoveRight size={20} /></NavLink>
                        <NavLink to='/' className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-[500] font-dmSans px-3 py-2 rounded-xl flex gap-3 items-center active:bg-[#08abbd3d] cursor-pointer md:hover:bg-[#08abbd3d] xl:px-5 xl:text-lg'>How It Works <LuMoveRight size={20} /></NavLink>
                    </div>
                </div>
                <div className='w-full h-auto flex gap-28 mt-5 xl:mt-10'>
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
            <div className='w-[50%] h-auto hidden lg:w-[40%] xl:w-[45%] md:flex md:justify-center md:items-center relative'>
                <img src={Card1} alt="Card Image" className='w-[320px] mx-auto absolute bottom-16 left-20 z-10 xl:w-[380px] xl:left-28 2xl:left-36 2xl:w-[420px]' />
                <img src={Card2} alt="Card Image" className='w-[400px] absolute bottom-0 z-20 xl:w-[460px] 2xl:w-[480px]' />
                <img src={Small1} alt="rounded image" className='absolute top-24 z-20 left-0 w-24 lg:top-28 xl:left-16 2xl:left-20 2xl:top-28' />
                <img src={Small2} alt="rounded image" className='absolute top-0 z-20 w-24 left-40 lg:top-[-20px] xl:top-[-40px] xl:left-56' />
                <img src={Small3} alt="rounded image" className='absolute top-24 z-20 w-24 right-0 xl:right-10 xl:top-36' />
                <img src={Small4} alt="rounded image" className='absolute bottom-0 z-20 w-24 right-0 xl:right-11 2xl:right-[90px]' />
                <img src={Small4} alt="rounded image" className='absolute bottom-10 z-20 w-24 left-5 xl:left-20 xl:bottom-14 2xl:bottom-20' />
            </div>
        </div>
    )
}

export default LandingPage
import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { LuMoveRight } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

function Section1() {
    return (
        <div className='w-full h-auto flex flex-col px-5 mt-20 md:mt-24 xl:mt-32 my-5 gap-5 md:flex-row-reverse lg:justify-center lg:gap-10 xl:gap-20 xl:my-10'>
            <div className='w-full h-auto flex flex-col gap-4 md:w-[50%] lg:w-[40%] xl:w-[30%]'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#0159A5]'>Contact Form</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-24 h-0.5 bg-[#00B30F] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[92px] text-[#00B30F]' />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-3 xl:gap-5'>
                    <h1 className='text-[#2C3C4D] font-bold font-jakarta text-4xl lg:text-5xl'>Get In Touch With Us</h1>
                    <p className='font-redhat text-[#8C959F] xl:text-lg'>We provide a complete service for the sale, purchase.</p>
                </div>
                <div className='w-full h-auto flex flex-col gap-3 xl:mt-5'>
                    <h2 className='text-[#373F43] font-semibold text-xl xl:text-2xl'>Find us at</h2>
                    <span className='flex gap-3 items-center text-sm text-[#8C959F] font-redhat md:text-base xl:gap-6 xl:text-lg xl:my-4'>
                        <SlLocationPin size={20} />
                        1234 Post Gaziabad
                    </span>
                    <h2 className='text-[#373F43] font-semibold text-xl xl:text-2xl'>Reach out to us at</h2>
                    <div className='w-full h-auto flex flex-col gap-3 sm:flex-row sm:justify-between xl:gap-6 xl:my-4'>
                        <span className='flex gap-3 items-center text-sm text-[#8C959F] font-redhat md:text-base xl:text-lg'>
                            <IoMailOutline size={20} />
                            contact@Sample.com
                        </span>
                        <span className='flex gap-3 items-center text-sm text-[#8C959F] font-redhat md:text-base xl:text-lg'>
                            <LuPhone size={20} />
                            +1 234 567 890
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col bg-[#F8F8FF] p-5 rounded-xl gap-4 font-dmSans md:w-[50%] xl:w-[45%] xl:py-8 xl:px-14'>
                <h1 className='text-[#2C3C4D] font-extrabold text-xl md:text-2xl'>Contact Form</h1>
                <div className='w-full h-auto flex flex-col gap-4 xl:mt-5'>
                    <div className='w-full h-auto flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center'>
                        <input type="text" placeholder='First Name' className='outline-none  px-3 py-2 bg-transparent rounded-3xl border border-[#29283366] sm:w-[48%]' />
                        <input type="text" placeholder='Last Name' className='outline-none  px-3 py-2 bg-transparent rounded-3xl border border-[#29283366] sm:w-[48%]' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center'>
                        <input type="email" placeholder='Email' className='outline-none  px-3 py-2 bg-transparent rounded-3xl border border-[#29283366] sm:w-[48%]' />
                        <input type="text" placeholder='Mobile Number' className='outline-none  px-3 py-2 bg-transparent rounded-3xl border border-[#29283366] sm:w-[48%]' />
                    </div>
                    <textarea placeholder='Message here' className='px-3 py-2 outline-none w-full resize-none h-60 bg-transparent rounded-3xl border border-[#29283366]'></textarea>
                </div>
                <div className='w-full h-auto flex xl:mt-5'>
                    <span className='w-auto h-auto py-2 px-4 bg-[#0159A5] font-dmSans text-white font-semibold rounded-full flex items-center gap-2 xl:px-6 cursor-pointer md:hover:bg-[#0158a5ce]'>Free Consultation <HiOutlineArrowNarrowRight size={20} /></span>
                </div>
            </div>
        </div>
    )
}

export default Section1
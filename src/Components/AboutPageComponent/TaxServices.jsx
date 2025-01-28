import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuMoveRight } from "react-icons/lu";

function TaxServices() {
    return (
        <div className='w-full h-auto flex flex-col gap-4 2xl:gap-6'>
            <h1 className='text-3xl font-bold text-[#292833] text-center font-jakarta sm:text-4xl md:text-5xl'><span className='text-[#0159A5]'>Finance</span> Tax Services</h1>
            <p className='text-center text-[#292833] font-dmSans text-sm sm:px-10 md:px-20 md:text-base lg:px-40 xl:px-60 2xl:px-80 xl:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <div className='w-full h-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='w-full h-auto flex flex-col p-5 gap-3 justify-between'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <div className='w-full h-auto pb-4 border-b'>
                            <BsGraphUpArrow size={50} className='text-[#292833]' />
                        </div>
                        <div className='w-full h-auto flex flex-col gap-3 text-[#292833]'>
                            <h1 className='text-xl font-jakarta font-semibold'>Estate and Gift Tax Planning</h1>
                            <p className='font-dmSans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex mt-6'>
                        <button className='w-auto h-auto px-5 py-2 bg-[#0159A5] text-white flex gap-2 items-center rounded-2xl md:hover:bg-[#014988] active:bg-[#014988] cursor-pointer'>Get Started <LuMoveRight size={20} /> </button>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col p-5 gap-3 justify-between'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <div className='w-full h-auto pb-4 border-b'>
                            <RiMoneyRupeeCircleLine size={50} className='text-[#292833]' />
                        </div>
                        <div className='w-full h-auto flex flex-col gap-3 text-[#292833]'>
                            <h1 className='text-xl font-jakarta font-semibold'>Tax Technology and Automation</h1>
                            <p className='font-dmSans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex mt-6'>
                        <button className='w-auto h-auto px-5 py-2 bg-[#0159A5] text-white flex gap-2 items-center rounded-2xl md:hover:bg-[#014988] active:bg-[#014988] cursor-pointer'>Get Started <LuMoveRight size={20} /> </button>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col p-5 gap-3 justify-between'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <div className='w-full h-auto pb-4 border-b'>
                            <IoDocumentTextOutline size={50} className='text-[#292833]' />
                        </div>
                        <div className='w-full h-auto flex flex-col gap-3 text-[#292833]'>
                            <h1 className='text-xl font-jakarta font-semibold'>Tax Policy and Regulation Advisory</h1>
                            <p className='font-dmSans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex mt-6'>
                        <button className='w-auto h-auto px-5 py-2 bg-[#0159A5] text-white flex gap-2 items-center rounded-2xl md:hover:bg-[#014988] active:bg-[#014988] cursor-pointer'>Get Started <LuMoveRight size={20} /> </button>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col p-5 gap-3 justify-between'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <div className='w-full h-auto pb-4 border-b'>
                            <AiOutlineGlobal size={50} className='text-[#292833]' />
                        </div>
                        <div className='w-full h-auto flex flex-col gap-3 text-[#292833]'>
                            <h1 className='text-xl font-jakarta font-semibold'>State and Local Tax (SALT) Services</h1>
                            <p className='font-dmSans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex mt-6'>
                        <button className='w-auto h-auto px-5 py-2 bg-[#0159A5] text-white flex gap-2 items-center rounded-2xl md:hover:bg-[#014988] active:bg-[#014988] cursor-pointer'>Get Started <LuMoveRight size={20} /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaxServices
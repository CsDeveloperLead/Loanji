import React from 'react'
import Logo from '../assets/logoFooter.png'
import { LuMailOpen } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";


function Footer() {
    return (
        <footer className='w-full h-auto flex flex-col bg-[#0C162A]'>
            <div className='w-full h-auto flex flex-col py-4 items-center gap-7 font-dmSans md:flex-row md:justify-between md:items-start md:px-10 md:my-7 lg:px-20'>
                <div className='w-auto h-auto md:w-20'>
                    <img src={Logo} alt="Logo" className='w-20 mx-auto' />
                </div>
                <div className='w-full h-auto flex flex-col justify-center items-center gap-3 md:w-80 xl:w-96'>
                    <div className='w-80 h-auto flex p-1 rounded-3xl overflow-hidden bg-[#D9D9D9] xl:w-full'>
                        <input type="email" placeholder='Enter Email Id' className='outline-none bg-[#D9D9D9] w-full py-1.5 px-4' />
                        <span className='bg-[#0159A5] text-white font-medium flex justify-center items-center px-6 rounded-3xl cursor-pointer active:bg-[#0158a5cd] md:hover:bg-[#0158a5cd]'>Submit</span>
                    </div>
                    <p className='text-white'>Signup To Get First Order Free..</p>
                </div>
            </div>
            <hr />
            <div className='w-full h-auto flex flex-col px-10 my-7 gap-10 lg:flex-row-reverse lg:gap-0 lg:my-14'>
                <div className='w-full h-auto flex flex-col gap-7 md:flex-row lg:w-[75%] xl:w-[80%]'>
                    <div className='w-full h-auto flex justify-between text-white md:justify-around'>
                        <div className='w-auto h-auto flex flex-col'>
                            <h1 className='font-bold text-xl xl:text-3xl'>Company</h1>
                            <div className='mt-4 flex flex-col lg:gap-2 xl:mt-6'>
                                <span>Home</span>
                                <span>About</span>
                                <span>Services</span>
                                <span>Projects</span>
                                <span>Blog</span>
                                <span>Faq</span>
                                <span>Contact Us</span>
                            </div>
                        </div>
                        <div className='w-auto h-auto flex flex-col'>
                            <h1 className='font-bold text-xl xl:text-3xl'>Services</h1>
                            <div className='mt-4 flex flex-col lg:gap-2 xl:mt-6'>
                                <span>Strategy</span>
                                <span>Creative Finance</span>
                                <span>Business Finance</span>
                                <span>Online Strategy</span>
                                <span>Digital Marketing</span>
                                <span>Insights</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-between text-white md:justify-around'>
                        <div className='w-auto h-auto flex flex-col'>
                            <h1 className='font-bold text-xl xl:text-3xl'>Policy</h1>
                            <div className='mt-4 flex flex-col lg:gap-2 xl:mt-6'>
                                <span>Support</span>
                                <span>Pricing</span>
                                <span>Testimonials</span>
                                <span>Faq</span>
                                <span>Signup</span>
                                <span>Signin</span>
                            </div>
                        </div>
                        <div className='w-auto h-auto flex flex-col'>
                            <h1 className='font-bold text-xl xl:text-3xl'>Office Address</h1>
                            <div className='mt-4 flex flex-col gap-4 text-xs md:text-base lg:gap-6 xl:mt-8'>
                                <span className='flex gap-4 items-center'><SlLocationPin size={20} /> Gaziabad</span>
                                <span className='flex gap-4 items-center'><LuMailOpen size={20} /> info@sample.com</span>
                                <span className='flex gap-4 items-center'><LuPhoneCall size={20} /> Phone: 234 234 1234</span>
                                <span className='flex gap-4 items-center mt-4'>View Map</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col md:w-[50%] md:mx-auto lg:w-[25%] xl:w-[20%]'>
                    <div className='w-full h-auto flex justify-between items-center text-white font-dmSans'>
                        <span>Mobile</span>
                        <span>+ 91 123456789</span>
                    </div>
                    <hr className='my-5' />
                    <div className='w-full h-auto flex justify-between items-center text-white font-dmSans'>
                        <span>Emal</span>
                        <span>hi@Sample.com</span>
                    </div>
                    <hr className='my-5' />
                    <div className='mt-2 w-full h-auto flex flex-col text-white font-jakarta gap-5 xl:gap-8'>
                        <h1 className='font-semibold text-3xl'>Follow Us</h1>
                        <div className='w-full h-auto flex gap-3 items-center'>
                            <span className='p-2 bg-[#0159A5] rounded-full flex justify-center items-center'>
                                <FaFacebookF size={25} className='text-white' />
                            </span>
                            <span className='p-2 bg-[#0159A5] rounded-full flex justify-center items-center'>
                                <FaXTwitter size={25} className='text-white' />
                            </span>
                            <span className='p-2 bg-[#0159A5] rounded-full flex justify-center items-center'>
                                <FaThreads size={25} className='text-white' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='w-full h-auto flex flex-col my-5 gap-5 px-5 md:gap-0 md:flex-row-reverse md:justify-between'>
                <div className='w-full h-auto flex flex-col justify-center items-center text-white font-jakarta gap-3 text-sm sm:flex-row sm:justify-between md:w-auto lg:w-[50%] 2xl:w-[45%]'>
                    <span className='font-semibold lg:border-r lg:pr-[5%] xl:pr-[15%]'>Saturday - Thursday : 8:30 am - 10:45 pm</span>
                    <span className='font-semibold flex justify-between items-center gap-4'>Book An Appointments <FaCaretRight size={20}/></span>
                </div>
                <div className='w-full h-auto text-white flex justify-center items-center text-sm md:w-auto'>
                    <span className='font-normal'>© 2022 – 2025 | Loanji, made with 💖 by Campaigning Source, all rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
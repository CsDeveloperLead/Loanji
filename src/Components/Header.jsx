import React from 'react'
import { FaBars } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/mainLogo.png'
import SideNavbar from './Admin/SideNav';

function Header() {
    return (
        <header className='w-full h-auto flex items-center justify-between px-5 md:h-16 fixed z-50 bg-white lg:h-20 xl:h-24 lg:px-10 xl:px-14'>
            <div className='w-auto h-auto flex items-center gap-2 xl:gap-4'>
                <img src={Logo} alt="main logo" />
            </div>
            <div className='w-auto h-auto gap-5 hidden md:flex md:items-center lg:gap-14 lg:text-lg xl:gap-20 font-jakarta font-semibold'>
                <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#0159A5]' : 'text-[#606F76]'} cursor-pointer hover:text-[#0159A5]`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-[#0159A5]' : 'text-[#606F76]'} cursor-pointer hover:text-[#0159A5]`}>About</NavLink>
                <NavLink to='/services' className={({ isActive }) => `${isActive ? 'text-[#0159A5]' : 'text-[#606F76]'} cursor-pointer hover:text-[#0159A5]`}>Services</NavLink>
                <NavLink to='/contact-us' className={({ isActive }) => `${isActive ? 'text-[#0159A5]' : 'text-[#606F76]'} cursor-pointer hover:text-[#0159A5]`}>Contact Us</NavLink>
                <NavLink to='/blog' className={({ isActive }) => `${isActive ? 'text-[#0159A5]' : 'text-[#606F76]'} cursor-pointer hover:text-[#0159A5]`}>Blog</NavLink>
            </div>
            <div className='w-auto h-auto flex items-center justify-center'>
                <FaBars size={25} className='md:hidden' />
                <span className='w-auto h-auto py-2 px-4 bg-[#0159A5] font-dmSans hidden text-white font-semibold rounded-2xl md:flex md:items-center gap-2 xl:px-6 cursor-pointer md:hover:bg-[#0158a5ce]'>Free Consultation <HiOutlineArrowNarrowRight size={25} /></span>
            </div>
            <SideNavbar />
        </header>
    )
}

export default Header
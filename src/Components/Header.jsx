import React from 'react'
import { FaBars } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='w-full h-14 flex items-center justify-between px-5 md:h-16 lg:h-20 xl:h-24 lg:px-10 xl:px-14'>
            <div className='w-auto h-auto flex items-center gap-2 xl:gap-4'>
                <span className='w-5 h-5 rounded-md bg-[#08AABD] md:w-7 md:h-7'></span>
                <span className='font-jakarta font-bold sm:text-lg md:text-xl'>Loan</span>
            </div>
            <div className='w-auto h-auto gap-5 hidden md:flex md:items-center lg:gap-14 lg:text-lg xl:gap-20 font-jakarta font-[500]'>
                <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#08AABD]' : 'text-black'} cursor-pointer hover:text-[#08AABD]`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-[#08AABD]' : 'text-black'} cursor-pointer hover:text-[#08AABD]`}>About</NavLink>
                <NavLink to='/pages' className={({ isActive }) => `${isActive ? 'text-[#08AABD]' : 'text-black'} cursor-pointer hover:text-[#08AABD]`}>Pages</NavLink>
                <NavLink to='/services' className={({ isActive }) => `${isActive ? 'text-[#08AABD]' : 'text-black'} cursor-pointer hover:text-[#08AABD]`}>Services</NavLink>
                <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-[#08AABD]' : 'text-black'} cursor-pointer hover:text-[#08AABD]`}>Contact</NavLink>
            </div>
            <div className='w-auto h-auto flex items-center justify-center'>
                <FaBars size={25} className='md:hidden' />
                <span className='w-auto h-auto py-2 px-4 bg-[#08AABD] font-dmSans hidden text-white font-semibold rounded-2xl md:flex md:items-center gap-2 xl:px-6 cursor-pointer md:hover:bg-[#09cde3]'>Free Consultation <HiOutlineArrowNarrowRight size={25} /></span>
            </div>
        </header>
    )
}

export default Header
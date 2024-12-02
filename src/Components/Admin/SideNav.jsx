import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import { IoIosLogOut } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";

const SideNavbar = () => {
    const [sideNav, setSideNav] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const { isAuthenticated, logout } = useContext(AuthContext)
    const location = useLocation()

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserEmail(decodedToken.email);
        }
    }, [isAuthenticated]);

    return (
        location.pathname.includes('/admin-dashboard') && userEmail === 'loanji@admin.com'
            ? <div className='w-auto h-auto flex flex-col left-0 top-[69px] absolute md:top-[64px] lg:top-[78px] xl:top-[95px] cursor-pointer'>
                <div onClick={() => setSideNav(true)} className='w-12 p-3 z-20 bg-[#0159A5] text-white rounded-r-md rounded-t-none relative xl:p-5 xl:w-16'>
                    <FaBars className='cursor-pointer' size={25} />
                </div>
                <div className={`${sideNav ? 'translate-x-0 duration-200 ease-in-out transition-all' : '-translate-x-52 duration-200 ease-in-out transition-all md:-translate-x-60 xl:-translate-x-72'} w-52 p-3 bg-[#0159A5] text-white h-[100vh] flex font-dmSans flex-col absolute z-30 md:p-5 md:w-60 xl:w-72`} >
                    <div className='w-full h-auto flex justify-end items-center'>
                        <IoClose size={25} className='md:size-8' onClick={() => setSideNav(false)} />
                    </div>
                    <Link onClick={() => setSideNav(false)} to='/admin-dashboard/blogs' className='p-3 font-medium text-white xl:text-lg' >Blogs</Link>
                    <Link onClick={logout} to='/' className='p-3 font-medium flex items-center gap-2 text-white xl:text-lg'>
                        Logout
                        <IoIosLogOut size={25} />
                    </Link>
                </div>
            </div>
            : null
    );
};

export default SideNavbar;
import React, { useEffect, useRef, useState } from 'react'
import { LuMoveRight } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

function BlogsPage() {
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef(null);
    const filterButtonRef = useRef(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch blog data from API when component mounts
    const fetchBlogs = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${backend}/api/v1/admin/get-blogs`)
            console.log(response.data.message);
            setBlogs(response.data.message)
            setLoading(true)
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setLoading(false)
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString); // Parse the ISO date string
        const options = { day: "2-digit", month: "long", year: "numeric" }; // Format options
        return date.toLocaleDateString("en-GB", options); // Format to "19 June 2024"
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !filterButtonRef.current.contains(event.target)) {
                setDropDown(false);
            }
        };
        fetchBlogs()

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='w-full h-auto flex flex-col mb-5 px-4 sm:px-5 md:px-10 lg:px-20 relative'>
            <div className='w-full h-auto mt-20 md:mt-24 xl:mt-32 flex flex-col gap-1 justify-center items-center'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#0C162A]'>Our Daily Updates</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-32 h-0.5 bg-[#0C162A] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[120px] text-[#003140]' />
                    </div>
                </div>
                <h1 className='text-xl text-[#292833] font-jakarta font-bold sm:text-3xl md:text-4xl lg:text-5xl'>News <span className='text-[#0159A5]'>Articles & Blog</span> Updates</h1>
                <p className='text-center text-[#292833] font-dmSans font-normal text-xs my-1 sm:text-sm sm:my-2 md:text-base md:my-3 lg:my-4'>It is a long established fact that a reader will be distracted <br />by the readable content of a page when looking </p>
            </div>
            <div className='w-full h-[1px] bg-[#454545A3] my-10'></div>
            <div className='w-full h-auto flex flex-col gap-8 lg:flex-row xl:mt-6'>
                {/* Serach Bar for Small Screens */}
                <div className='w-full h-auto flex justify-between items-center md:w-[80%] md:mx-auto lg:hidden'>
                    <div className='w-60 h-auto flex justify-between items-center border-b-[1px] border-black pb-2'>
                        <input type="text" placeholder='Search' className='outline-none w-full px-3 py-2 font-dmSans' />
                        <CiSearch size={25} className='flex-shrink-0' />
                    </div>
                    <span ref={filterButtonRef} onClick={() => setDropDown(!dropDown)} className='h-10 w-10 rounded-full active:bg-gray-300 md:hover:bg-gray-300 bg-gray-200 flex justify-center items-center'>
                        <IoFilter size={25} />
                    </span>
                    {
                        dropDown && (
                            <div ref={dropdownRef} className='w-auto h-auto p-3 bg-gray-200 flex flex-col absolute top-64 font-dmSans right-1 rounded-md gap-2 z-50 sm:top-[273px] md:top-[295px] md:right-28'>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Personal Finance</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Business Finance</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Government Finance</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Source of Tax Revenue</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Purposes of Taxes</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Special Tax</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Income Tax</span>
                                <span className='py-2 active:bg-gray-100 px-3 md:hover:bg-gray-100'>Consumption Tax</span>
                            </div>
                        )
                    }
                </div>
                {/* All Blogs */}
                <div className='w-full h-auto grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:w-[80%] md:mx-auto lg:w-[60%] lg:gap-8'>
                    {
                        blogs.length >= 1
                            ? blogs.map((item, index) => (
                                <NavLink to='/single-blog' state={{ item }} key={index} className='w-[90%] h-auto flex flex-col gap-3 2xl:w-[85%] cursor-pointer'>
                                    <div className='w-full h-auto relative'>
                                        <img src={item.image} alt="blog image" className='w-full h-52 rounded-xl bg-[#D6D6EB]' />
                                        <span className='absolute top-0 bg-[#08abbdba] text-[#292833] border border-[#0159A5] font-medium m-3 font-dmSans px-3 py-2 text-sm rounded-xl flex gap-3 items-center cursor-pointer xl:text-base'>{item.category} <LuMoveRight size={20} /></span>
                                    </div>
                                    <div className='w-full h-auto flex flex-col gap-3'>
                                        <div className='w-full h-auto flex items-center gap-2'>
                                            <span className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] font-medium font-dmSans px-5 py-1 xl:py-1.5 text-sm rounded-full flex gap-3 items-center cursor-pointer'>{item.tag}</span>
                                            <span className='text-[#292833] text-xs font-normal lg:text-sm'>{formatDate(item.createdAt)}</span>
                                        </div>
                                        <h1 className='text-[#292833] font-dmSans font-bold'>{item.title.slice(0, 45)}</h1>
                                        <p className='text-[#292833] font-dmSans font-normal text-sm'>{item.content.slice(0, 190) + '...'}</p>
                                    </div>
                                </NavLink>
                            ))
                            : <p>No Blogs available</p>
                    }
                </div>
                {/* Past Post in small Screens */}
                <div className='w-full h-auto flex flex-col gap-5 lg:hidden mb-7'>
                    <h1 className='w-full h-auto text-3xl font-dmSans text-[#292833] font-bold'>Past Post</h1>
                    <div className='w-full h-auto grid grid-cols-1 gap-5 sm:grid-cols-2'>
                        <div className='w-full h-auto flex justify-center'>
                            <img src="" alt="" className='w-40 h-32 bg-gray-400 rounded-2xl' />
                            <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-4 mt-3'>
                                <span className='text-[#292833] font-normal md:text-lg'>March 20</span>
                                <span className='text-black font-medium md:text-lg'>learn everything there is to know</span>
                            </div>
                        </div>
                        <div className='w-full h-auto flex justify-center'>
                            <img src="" alt="" className='w-40 h-32 bg-gray-400 rounded-2xl' />
                            <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-4 mt-3'>
                                <span className='text-[#292833] font-normal md:text-lg'>March 20</span>
                                <span className='text-black font-medium md:text-lg'>learn everything there is to know</span>
                            </div>
                        </div>
                        <div className='w-full h-auto flex justify-center'>
                            <img src="" alt="" className='w-40 h-32 bg-gray-400 rounded-2xl' />
                            <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-4 mt-3'>
                                <span className='text-[#292833] font-normal md:text-lg'>March 20</span>
                                <span className='text-black font-medium md:text-lg'>learn everything there is to know</span>
                            </div>
                        </div>
                        <div className='w-full h-auto flex justify-center'>
                            <img src="" alt="" className='w-40 h-32 bg-gray-400 rounded-2xl' />
                            <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-4 mt-3'>
                                <span className='text-[#292833] font-normal md:text-lg'>March 20</span>
                                <span className='text-black font-medium md:text-lg'>learn everything there is to know</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side section in large screens */}
                <div className='hidden lg:w-[33%] lg:h-auto lg:flex lg:flex-col lg:border-x lg:border-[#A7A7CD] lg:px-5 lg:gap-5'>
                    <div className='w-full h-auto flex justify-between items-center border-b-[1px] border-black pb-2'>
                        <input type="text" placeholder='Search' className='outline-none w-full px-3 py-2 font-dmSans' />
                        <CiSearch size={25} className='flex-shrink-0' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-5'>
                        <h1 className='font-jakarta font-bold text-2xl'>Categories</h1>
                        <div className='w-full h-auto flex flex-col'>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Personal Finance</span>
                                <span>05</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Business Finance</span>
                                <span>56</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Government Finance</span>
                                <span>25</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Source of Tax Revenue</span>
                                <span>36</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Purposes of Taxes</span>
                                <span>47</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Special Tax</span>
                                <span>25</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Income Tax</span>
                                <span>36</span>
                            </div>
                            <div className='w-full h-auto py-2 flex justify-between px-2 text-[#292833] font-dmSans border-b border-[#D9D9D9]'>
                                <span>Consumption Tax</span>
                                <span>47</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-5'>
                        <h1 className='w-full h-auto text-3xl font-dmSans text-[#292833] font-bold'>Past Post</h1>
                        <div className='w-full h-auto grid grid-cols-1 gap-5'>
                            <div className='w-full h-auto flex justify-center'>
                                <img src="" alt="" className='w-32 h-28 bg-gray-400 rounded-2xl' />
                                <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-6 mt-3'>
                                    <span className='text-[#292833] font-normal'>March 20</span>
                                    <span className='text-black font-medium'>learn everything there is to know</span>
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-center'>
                                <img src="" alt="" className='w-32 h-28 bg-gray-400 rounded-2xl' />
                                <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-6 mt-3'>
                                    <span className='text-[#292833] font-normal'>March 20</span>
                                    <span className='text-black font-medium'>learn everything there is to know</span>
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-center'>
                                <img src="" alt="" className='w-32 h-28 bg-gray-400 rounded-2xl' />
                                <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-6 mt-3'>
                                    <span className='text-[#292833] font-normal'>March 20</span>
                                    <span className='text-black font-medium'>learn everything there is to know</span>
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-center'>
                                <img src="" alt="" className='w-32 h-28 bg-gray-400 rounded-2xl' />
                                <div className='w-auto h-auto flex flex-col font-dmSans gap-2 px-6 mt-3'>
                                    <span className='text-[#292833] font-normal'>March 20</span>
                                    <span className='text-black font-medium'>learn everything there is to know</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3 mt-2'>
                        <h1 className='w-full h-auto text-3xl font-dmSans text-[#292833] font-bold'>Newsletter</h1>
                        <div className='w-full h-auto flex justify-between items-center border-b-[1px] border-black pb-2'>
                            <input type="text" placeholder='Your mail id' className='outline-none w-full px-3 py-2 font-dmSans' />
                        </div>
                        <div className='w-full h-auto mt-3'>
                            <button className='px-6 py-2 bg-[#0159A5] rounded-full text-white font-dmSans cursor-pointer'>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsPage
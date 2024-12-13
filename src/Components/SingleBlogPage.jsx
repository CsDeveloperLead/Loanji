import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LuMoveRight } from "react-icons/lu";

function SingleBlogPage() {
    const location = useLocation()
    const { item } = location.state

    const formatDate = (isoString) => {
        const date = new Date(isoString); // Parse the ISO date string
        const options = { day: "2-digit", month: "long", year: "numeric" }; // Format options
        return date.toLocaleDateString("en-GB", options); // Format to "19 June 2024"
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='w-full h-auto flex flex-col sm:w-[80%] md:w-[90%] mx-auto pb-10'>
            <div className='w-full h-auto flex flex-col mt-20 md:mt-24 xl:mt-32 my-5 relative'>
                <img src={item?.image} alt="blog image" className='w-full h-auto object-cover mx-auto sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] rounded-xl' />
                <span className='absolute top-0 bg-[#08abbdba] text-[#292833] border border-[#0159A5] font-medium m-3 font-dmSans px-3 py-2 text-sm rounded-xl flex gap-3 items-center cursor-pointer xl:top-5 xl:left-5 xl:text-base'>{item?.category} <LuMoveRight size={20} /></span>
            </div>
            <div className='w-full h-auto flex px-3 sm:px-0'>
                <span className='text-sm text-[#292833] font-dmSans font-normal'>{formatDate(item?.createdAt)}</span>
            </div>
            <h1 className='w-full h-auto flex flex-col my-7 px-3 font-bold font-jakarta text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:px-0'>
                {item.title}
            </h1>
            <div style={{ whiteSpace: "pre-wrap" }} className='w-full h-auto flex flex-col px-3 sm:px-0 font-dmSans'>
                {item.content}
            </div>
            <div className='w-full h-auto flex flex-col my-8 px-5 gap-4 md:flex-row lg:my-14 sm:px-0'>
                <img src={item.image1} alt="optional image1" className='w-full rounded-lg object-cover sm:w-[80%] mx-auto md:w-[43%]' />
                <img src={item.image2} alt="optional image2" className='w-full rounded-lg object-cover sm:w-[80%] mx-auto md:w-[43%]' />
            </div>
        </div>
    )
}

export default SingleBlogPage
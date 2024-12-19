import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { LuMoveRight } from "react-icons/lu";
import axios from 'axios';

const backend = import.meta.env.VITE_BACKEND_URL

function SingleBlogPage() {
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const fetchSingleBlog = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${backend}/api/v1/admin/get-single-blog`, { id })
            setBlog(response.data.message)
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
        window.scrollTo(0, 0);
        fetchSingleBlog()
    }, [])

    return (
        <div className='w-full h-auto flex flex-col sm:w-[80%] md:w-[90%] mx-auto pb-10'>
            <div className='w-full h-auto flex flex-col mt-20 md:mt-24 xl:mt-32 my-5 relative'>
                <img src={blog?.image} alt="blog image" className='w-full h-auto object-cover mx-auto sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] rounded-xl' />
                <span className='absolute top-0 bg-[#08abbdba] text-[#292833] border border-[#0159A5] font-medium m-3 font-dmSans px-3 py-2 text-sm rounded-xl flex gap-3 items-center cursor-pointer xl:top-5 xl:left-5 xl:text-base'>{blog?.category} <LuMoveRight size={20} /></span>
            </div>
            <div className='w-full h-auto flex px-3 sm:px-0'>
                <span className='text-sm text-[#292833] font-dmSans font-normal'>{formatDate(blog?.createdAt)}</span>
            </div>
            <h1 className='w-full h-auto flex flex-col my-7 px-3 font-bold font-jakarta text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:px-0'>
                {blog.title}
            </h1>
            <div style={{ whiteSpace: "pre-wrap" }} className='w-full h-auto flex flex-col px-3 sm:px-0 font-dmSans'>
                {blog.content}
            </div>
            <div className='w-full h-auto flex flex-col my-8 px-5 gap-4 md:flex-row lg:my-14 sm:px-0'>
                <img src={blog.image1} alt="optional image1" className='w-full rounded-lg object-cover sm:w-[80%] mx-auto md:w-[43%]' />
                <img src={blog.image2} alt="optional image2" className='w-full rounded-lg object-cover sm:w-[80%] mx-auto md:w-[43%]' />
            </div>
        </div>
    )
}

export default SingleBlogPage
import React, { useState } from 'react'
import { LuMoveRight } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FAQ = [
    {
        id: 1,
        title: 'What is the FitnessFit Schedule?',
        answer: 'Our schedule is designed to accommodate all fitness levels and busy lifestyles. We offer a wide range of classes from early morning to late evening. For the most up-to-date schedule, including class times and descriptions.'
    },
    {
        id: 2,
        title: 'Do I need previous experience for your classes?',
        answer: 'No previous experience is required to join our classes. Our certified instructors tailor each session to accommodate beginners and advanced members alike. We encourage everyone to participate, regardless of fitness level, and our team is here to support you every step of the way.'
    },
    {
        id: 3,
        title: 'Do you offer on-site classes, or just virtual classes?',
        answer: 'We offer both on-site and virtual classes to cater to your preferences and needs. You can join us at our state-of-the-art facility for in-person sessions or participate in our virtual classes from the comfort of your home'
    },
    {
        id: 4,
        title: 'Do you offer a trial class for any of your classes?',
        answer: 'Yes, we do! We believe in the quality of our classes and invite you to experience them firsthand. We offer a complimentary trial class for new members to help you find the perfect fit. Please contact our front desk or sign up online to schedule your trial class.'
    },
]

function Faqs() {
    const [index, setIndex] = useState(null)

    function handleSelection(i) {
        if (i === index) {
            setIndex(0)
        } else {
            setIndex(i)
        }
    }
    return (
        <div className='w-full h-auto flex flex-col gap-8 xl:gap-14'>
            <div className='w-full h-auto flex flex-col justify-between items-center gap-2 md:gap-4'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#0159A5]'>Our Daily Updates</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-32 h-0.5 bg-[#0159A5] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[125px] text-[#0159A5]' />
                    </div>
                </div>
                <h1 className='text-[#292833] w-full h-auto text-center text-[23px] font-bold sm:text-3xl md:text-4xl lg:text-5xl font-jakarta'>
                    Frequently
                    <span className='text-[#0159A5]'> Asked </span>
                    Questions
                </h1>
                <p className='text-center text-[#292833] font-dmSans text-sm sm:px-10 md:px-20 md:text-base lg:px-40 xl:px-60 2xl:px-80 xl:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            </div>
            <div className='w-full h-auto flex flex-col gap-3'>
                {
                    FAQ.map((items, i) => (
                        <div key={items.id} className='w-full h-auto text-sm py-3 rounded-lg px-2 bg-[#F1F1F9] flex flex-col lg:pl-10 lg:pr-5 lg:py-4'>
                            <p className='flex justify-between font-semibold sm:text-lg lg:text-xl xl:py-2 xl:px-1 font-jakarta'>{items.title} <span className='mx-1' onClick={() => handleSelection(items.id)}>{index === items.id ? <CiCircleMinus size={20} className='xl:size-7 cursor-pointer' /> : <CiCirclePlus size={20} className='xl:size-7 cursor-pointer' />}</span></p>
                            {index === items.id ?
                                <p className='mt-3 text-xs font-dmSans text-[#292833] md:text-base lg:pr-32 xl:pr-44 2xl:pr-80'>{items.answer}</p>
                                : null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faqs
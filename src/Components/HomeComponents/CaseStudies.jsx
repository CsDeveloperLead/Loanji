import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

function CaseStudies() {
  return (
    <div className='w-full h-auto flex flex-col gap-8 xl:gap-12'>
      <div className='w-full h-auto flex flex-col gap-4 px-5 md:px-10 xl:px-20 md:flex-row'>
        <div className='w-full h-auto flex flex-col'>
          <div className='w-auto h-auto flex flex-col'>
            <span className='font-dmSans font-[500] text-[#0C162A]'>Latest Case Studies</span>
            <div className='w-auto h-5 flex items-center relative'>
              <span className='w-32 h-0.5 bg-[#0C162A] rounded-sm'></span>
              <LuMoveRight size={25} className='absolute left-[120px] text-[#003140]' />
            </div>
          </div>
          <div className='w-full h-auto flex flex-col gap-1'>
            <p className='text-3xl font-semibold font-jakarta md:text-4xl lg:text-5xl'>Financial Consultancy, <span className='text-[#0159A5]'>Case</span></p>
            <p className='text-3xl font-semibold font-jakarta md:text-4xl lg:text-5xl'><span className='text-[#0159A5]'>Studies,</span> Loan</p>
          </div>
        </div>
        <div className='w-full h-auto md:w-[50%] md:pt-5'>
          <div className='w-full h-auto flex flex-col gap-4 font-dmSans'>
            <p className='text-[#5C5C5C]'>It is a long established fact that a reader will be byhe readable content of a page when looking at its layout. The point of using </p>
            <NavLink to='/' className='bg-[#08AABD1A] text-[#292833] border border-[#0159A5] w-40 font-[500] font-dmSans px-3 py-2 rounded-xl flex gap-3 items-center active:bg-[#08abbd3d] cursor-pointer md:hover:bg-[#08abbd3d] xl:px-5 xl:w-48 xl:mt-4 xl:text-lg'>How It Works <LuMoveRight size={20} /></NavLink>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex flex-col gap-5 xl:gap-10'>
        <div className='disable-scrollbar w-full h-auto flex overflow-x-scroll gap-5 xl:gap-8 px-1'>
          <div className='min-w-60 h-80 rounded-3xl border overflow-hidden relative md:min-w-80 md:h-96 xl:min-w-[400px] xl:h-[450px]'>
            <img src="" alt="" className='bg-[#D6D6EB] h-full w-full object-cover' />
            <div className='w-full h-auto flex absolute bottom-7 px-3 xl:bottom-10 xl:px-10'>
              <div className='w-full flex-1 flex flex-col text-white font-jakarta xl:gap-4'>
                <span className='text-3xl font-bold md:text-4xl xl:text-5xl'>Loans</span>
                <span className='md:text-lg xl:text-xl'>Financial Services</span>
              </div>
              <div className='hidden md:flex-shrink-0 md:flex md:justify-center md:items-center'>
                <BsFillArrowUpRightCircleFill size={40} className='text-[#0C162A] xl:size-16' />
              </div>
            </div>
          </div>
          <div className='min-w-96 h-80 rounded-3xl border overflow-hidden relative md:min-w-[500px] md:h-96 xl:min-w-[600px] xl:h-[450px]'>
            <img src="" alt="" className='bg-[#D6D6EB] h-full w-full object-cover' />
            <div className='w-full h-auto flex absolute bottom-7 px-3 xl:bottom-10 xl:px-10'>
              <div className='w-full flex-1 flex flex-col text-white font-jakarta xl:gap-4'>
                <span className='text-3xl font-bold md:text-4xl xl:text-5xl'>Tax Planning</span>
                <span className='md:text-lg xl:text-xl'>Financial Services</span>
              </div>
              <div className='hidden md:flex-shrink-0 md:flex md:justify-center md:items-center'>
                <BsFillArrowUpRightCircleFill size={40} className='text-[#0C162A] xl:size-16' />
              </div>
            </div>
          </div>
          <div className='min-w-96 h-80 rounded-3xl border overflow-hidden relative md:min-w-[500px] md:h-96 xl:min-w-[600px] xl:h-[450px]'>
            <img src="" alt="" className='bg-[#D6D6EB] h-full w-full object-cover' />
            <div className='w-full h-auto flex absolute bottom-7 px-3 xl:bottom-10 xl:px-10'>
              <div className='w-full flex-1 flex flex-col text-white font-jakarta xl:gap-4'>
                <span className='text-3xl font-bold md:text-4xl xl:text-5xl'>Portfolio Solutions</span>
                <span className='md:text-lg xl:text-xl'>Financial Services</span>
              </div>
              <div className='hidden md:flex-shrink-0 md:flex md:justify-center md:items-center'>
                <BsFillArrowUpRightCircleFill size={40} className='text-[#0C162A] xl:size-16' />
              </div>
            </div>
          </div>
        </div>
        <div className='disable-scrollbar w-full h-auto flex overflow-x-scroll gap-5 xl:gap-8 px-1'>
          <div className='min-w-96 h-80 rounded-3xl border overflow-hidden relative md:min-w-[700px] md:h-96 xl:min-w-[800px] xl:h-[450px]'>
            <img src="" alt="" className='bg-[#D6D6EB] h-full w-full object-cover' />
            <div className='w-full h-auto flex absolute bottom-7 px-3 xl:bottom-10 xl:px-10'>
              <div className='w-full flex-1 flex flex-col text-white font-jakarta xl:gap-4'>
                <span className='text-3xl font-bold md:text-4xl xl:text-5xl'>Loans Solutions</span>
                <span className='md:text-lg xl:text-xl'>Financial Services</span>
              </div>
              <div className='hidden md:flex-shrink-0 md:flex md:justify-center md:items-center'>
                <BsFillArrowUpRightCircleFill size={40} className='text-[#0C162A] xl:size-16' />
              </div>
            </div>
          </div>
          <div className='min-w-96 h-80 rounded-3xl border overflow-hidden relative md:min-w-[700px] md:h-96 xl:min-w-[800px] xl:h-[450px]'>
            <img src="" alt="" className='bg-[#D6D6EB] h-full w-full object-cover' />
            <div className='w-full h-auto flex absolute bottom-7 px-3 xl:bottom-10 xl:px-10'>
              <div className='w-full flex-1 flex flex-col text-white font-jakarta xl:gap-4'>
                <span className='text-3xl font-bold md:text-4xl xl:text-5xl'>Retirement Planning</span>
                <span className='md:text-lg xl:text-xl'>Financial Services</span>
              </div>
              <div className='hidden md:flex-shrink-0 md:flex md:justify-center md:items-center'>
                <BsFillArrowUpRightCircleFill size={40} className='text-[#0C162A] xl:size-16' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
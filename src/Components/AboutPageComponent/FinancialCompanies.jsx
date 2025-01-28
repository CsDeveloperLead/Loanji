import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import Image1 from '../../assets/AboutPageImages/company1.png'
import Image2 from '../../assets/AboutPageImages/company2.png'
import Image3 from '../../assets/AboutPageImages/company3.png'
import Image4 from '../../assets/AboutPageImages/company4.png'
import Image5 from '../../assets/AboutPageImages/company5.png'
import Image6 from '../../assets/AboutPageImages/company6.png'
import Image7 from '../../assets/AboutPageImages/company7.png'
import Image8 from '../../assets/AboutPageImages/company8.png'
import Image9 from '../../assets/AboutPageImages/company9.png'
import Image10 from '../../assets/AboutPageImages/company10.png'

const companyImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]

function FinancialCompanies() {
    return (
        <div className='w-full h-auto flex flex-col my-5 xl:my-10 gap-8 xl:gap-14'>
            <div className='w-full h-auto flex flex-col justify-between items-center gap-2 md:gap-4'>
                <div className='w-auto h-auto flex flex-col'>
                    <span className='font-dmSans font-[500] text-[#0159A5]'>Finance Clients</span>
                    <div className='w-auto h-5 flex items-center relative'>
                        <span className='w-32 h-0.5 bg-[#0159A5] rounded-sm'></span>
                        <LuMoveRight size={25} className='absolute left-[110px] text-[#0159A5]' />
                    </div>
                </div>
                <h1 className='text-[#292833] w-full h-auto text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-jakarta'>
                    Our
                    <span className='text-[#0159A5]'> Financial </span>
                    Companies
                </h1>
                <p className='text-center text-[#292833] font-dmSans text-sm sm:px-10 md:px-20 md:text-base lg:px-40 xl:px-60 2xl:px-80 xl:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            </div>
            <div className='w-full h-auto grid grid-cols-3 items-center sm:grid-cols-5'>
                {
                    companyImages.map((item, index) => (
                        <img key={index} src={item} alt={`company images ${index + 1} `} className='w-full h-20 object-contain p-3 border md:h-32 md:p-6 lg:h-36' />
                    ))
                }
            </div>
        </div>
    )
}

export default FinancialCompanies
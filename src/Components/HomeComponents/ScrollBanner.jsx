import React, { useEffect, useRef } from 'react';
import Logo1 from '../../assets/HomePageImages/ScrollLogo/logo1.png';
import Logo2 from '../../assets/HomePageImages/ScrollLogo/logo2.png';
import Logo3 from '../../assets/HomePageImages/ScrollLogo/logo3.png';
import Logo4 from '../../assets/HomePageImages/ScrollLogo/logo4.png';
import Logo5 from '../../assets/HomePageImages/ScrollLogo/logo5.png';
import Logo6 from '../../assets/HomePageImages/ScrollLogo/logo6.png';

function ScrollBanner() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Get vertical scroll position
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${scrollTop}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full h-auto overflow-hidden bg-[#F8F8FF] py-5">
            <div
                ref={sliderRef}
                className="flex items-center px-5 xl:px-10 gap-10 md:gap-20 xl:gap-40"
            >
                <img src={Logo1} alt="logo 1" className="w-40 md:w-60 xl:w-60" />
                <img src={Logo2} alt="logo 2" className="w-24 md:w-48" />
                <img src={Logo3} alt="logo 3" className="w-24 md:w-48" />
                <img src={Logo4} alt="logo 4" className="w-24 md:w-48 xl:w-20" />
                <img src={Logo5} alt="logo 5" className="w-24 md:w-48" />
                <img src={Logo6} alt="logo 6" className="w-24 md:w-48" />
                {/* Repeat logos for smooth effect */}
                <img src={Logo1} alt="logo 1" className="w-40 md:w-60 xl:w-60" />
                <img src={Logo2} alt="logo 2" className="w-24 md:w-48" />
                <img src={Logo3} alt="logo 3" className="w-24 md:w-48" />
                <img src={Logo4} alt="logo 4" className="w-24 md:w-48 xl:w-20" />
                <img src={Logo5} alt="logo 5" className="w-24 md:w-48" />
                <img src={Logo6} alt="logo 6" className="w-24 md:w-48" />
            </div>
        </div>
    );
}

export default ScrollBanner;

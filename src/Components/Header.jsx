import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import Logo from "../assets/mainLogo.png";
import SideNavbar from "./Admin/SideNav";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const Navigate = useNavigate();

  const services = [
    {
      name: "Household emergency",
      description: "Household emergency Realted Loan",
      path: "household-emergency",
    },
    {
      name: "Vehicle Loan",
      description: "Vehicle Loan Related Loan",
      path: "vehicle-loan",
    },
    {
      name: "Personal Loan",
      description: "Personal Loan Related Loan",
      path: "personal-loan",
    },
    {
      name: "Pocket loan",
      description: "Pocket loan Related Loan",
      path: "pocket-loan",
    },
  ];

  return (
    <header className="w-full h-auto flex items-center justify-between px-5 md:h-16 fixed z-50 bg-white lg:h-20 xl:h-24 lg:px-10 xl:px-14">
      <div className="w-auto h-auto flex items-center gap-2 xl:gap-4">
        <img src={Logo} alt="main logo" />
      </div>
      <div className="w-auto h-auto gap-5 hidden md:flex md:items-center lg:gap-14 lg:text-lg xl:gap-20 font-jakarta font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-[#0159A5]" : "text-[#606F76]"
            } cursor-pointer hover:text-[#0159A5]`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-[#0159A5]" : "text-[#606F76]"
            } cursor-pointer hover:text-[#0159A5]`
          }
        >
          About
        </NavLink>

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="cursor-pointer text-[#606F76] hover:text-[#0159A5]">
            Services
          </span>

          {dropdown && (
            <div className="absolute left-0 w-60 bg-white shadow-lg rounded-lg py-2 z-50 border">
              {services.map((service, index) => (
                <NavLink
                  key={index}
                  to={`/services/${service.path}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onMouseEnter={() => setHoveredService(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {service.name}
                  {hoveredService === service.name && (
                    <p className="text-xs text-gray-500 mt-1">
                      {service.description}
                    </p>
                  )}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink
          to="/repay-loan"
          className={({ isActive }) =>
            `${
              isActive ? "text-[#0159A5]" : "text-[#606F76]"
            } cursor-pointer hover:text-[#0159A5]`
          }
        >
          Repay Loan
        </NavLink>
        <NavLink
          to="/emi-calculator"
          className={({ isActive }) =>
            `${
              isActive ? "text-[#0159A5]" : "text-[#606F76]"
            } cursor-pointer hover:text-[#0159A5]`
          }
        >
          EMI Calculator
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `${
              isActive ? "text-[#0159A5]" : "text-[#606F76]"
            } cursor-pointer hover:text-[#0159A5]`
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${
              isActive ? "text-[#0159A5]" : "text-[#606F76]"
            } cursor-pointer hover:text-[#0159A5]`
          }
        >
          Blog
        </NavLink>
      </div>
      <div className="w-auto h-auto flex items-center justify-center">
        {sidebar ? (
          <IoClose
            onClick={() => setSidebar(false)}
            size={25}
            className="md:hidden"
          />
        ) : (
          <FaBars
            onClick={() => setSidebar(true)}
            size={25}
            className="md:hidden"
          />
        )}
        {/* Sidebar for small screens */}
        <div
          className={`w-80 h-full fixed bg-gray-200 top-[69px] flex flex-col z-30 duration-300 ease-in-out sm:w-96 md:hidden p-2 ${
            sidebar ? "translate-x-0" : "translate-x-60"
          }`}
        >
          <NavLink
            onClick={() => setSidebar(false)}
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#0159A5]" : "text-[#424648]"
              } cursor-pointer active:text-[#0159A5] active:bg-gray-300 py-3 px-3`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#0159A5]" : "text-[#424648]"
              } cursor-pointer active:text-[#0159A5] active:bg-gray-300 py-3 px-3`
            }
          >
            About
          </NavLink>
          <div
            className="py-3 px-3 cursor-pointer text-[#424648] flex items-center justify-between hover:text-[#0159A5]"
            onClick={() => setMobileDropdown(!mobileDropdown)}
          >
            <span>Services</span>
            {mobileDropdown ? <IoChevronUp /> : <IoChevronDown />}
          </div>
          {mobileDropdown && (
            <div className="ml-5 border-l pl-3">
              {services.map((service, index) => (
                <NavLink
                  key={index}
                  to={`/services/${service.path}`}
                  className="block py-2 px-3 text-[#606F76] hover:text-[#0159A5]"
                  onClick={() => setSidebar(false)}
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          )}
          <NavLink
            onClick={() => setSidebar(false)}
            to="/repay-loan"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#0159A5]" : "text-[#424648]"
              } cursor-pointer active:text-[#0159A5] active:bg-gray-300 py-3 px-3`
            }
          >
            Repay Loan
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to="/emi-calculator"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#0159A5]" : "text-[#424648]"
              } cursor-pointer active:text-[#0159A5] active:bg-gray-300 py-3 px-3`
            }
          >
            EMI Calculator
          </NavLink>

          <NavLink
            onClick={() => setSidebar(false)}
            to="/contact-us"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#0159A5]" : "text-[#424648]"
              } cursor-pointer active:text-[#0159A5] active:bg-gray-300 py-3 px-3`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to="/blog"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#0159A5]" : "text-[#424648]"
              } cursor-pointer active:text-[#0159A5] active:bg-gray-300 py-3 px-3`
            }
          >
            Blog
          </NavLink>
        </div>
        <button onClick={() => Navigate("/apply-now")} className="w-auto h-auto py-2 px-4 bg-[#0159A5] font-dmSans hidden text-white font-semibold rounded-2xl md:flex md:items-center gap-2 xl:px-6 cursor-pointer md:hover:bg-[#0158a5ce]">
          Apply Now
          <HiOutlineArrowNarrowRight size={25} />
        </button>
      </div>
      <SideNavbar />
    </header>
  );
}

export default Header;

import React from 'react';
import { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';// Import search and bars icons
import { useEffect } from 'react';

const Header = () => {

  const [toggleform, settoggleform] = useState(false);


  const handletoggleform = () => {
    console.log("Toggling form", toggleform);
    settoggleform(!toggleform);
  };
  useEffect(() => {
    if (toggleform) {
      document.body.style.overflow = 'hidden'; // Scroll ko disable karein
      document.body.style.position = 'fixed'; // Body ki position ko fixed karein
    } else {
      document.body.style.overflow = 'auto'; // Scroll ko enable karein
      document.body.style.position = 'relative'; // Position ko reset karein
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
      document.body.style.position = 'relative'; // Cleanup
    };
  }, [toggleform]);
  return (
    <>
      <div className="h-20 fixed top-0 left-0  border-b border-gray-700 z-50 w-full flex items-center bg-[#212529] shadow-md font-sans">
        {/* Logo Section */}
        <div className="flex items-center px-4 sm:px-10">
          <img
            src="https://reves-wp.b-cdn.net/wp-content/uploads/2022/04/Reves-Logo.svg"
            className="h-7 w-auto max-w-full"
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center space-x-12 text-white text-[16px] font-helveticaLight font-bold tracking-wide">
  {["Home", "About Us", "Projects", "Services", "Blog", "Contact"].map((item) => (
    <h3
      key={item}
      onClick={() => {
        // Navigate to the correct route based on the item
        if (item === "Home") {
          window.location.href = "/";
        } else if (item === "About Us") {
          window.location.href = "/about";
        } else if (item === "Projects") {
          window.location.href = "/projects";
        } else if (item === "Services") {
          window.location.href = "/services";
        } else if (item === "Blog") {
          window.location.href = "/blogs";
        } else if (item === "Contact") {
          window.location.href = "/contact";
        }
      }}
      className="hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105"
    >
      {item}
    </h3>
  ))}
</div>


        {/* Start Project Button and Icons */}
        <div className="ml-auto flex items-center space-x-6 pr-4 sm:pr-10">
          <Link to={"/contact"}>
          {/* Start Project Button */}
          <button
            className="hidden xl:block px-5 py-2 text-[13px] font-roboto font-bold text-white uppercase tracking-wide border border-gray-500 rounded-md hover:bg-gray-300 hover:text-[#212529] hover:shadow-lg transition-all duration-300"
          >
            Start Project
          </button>
          </Link>
          {/* Search Icon for xl and larger */}
          <div className="hidden xl:flex items-center justify-center w-9 h-9 rounded-full border border-gray-500 hover:bg-gray-300 hover:text-[#212529] transition-all duration-300 cursor-pointer">
            <FaSearch className="text-white text-[16px] transition-transform duration-300 hover:scale-110" />
          </div>

          {/* Bars Icon for smaller than xl */}
          <div onClick={handletoggleform} className="xl:hidden flex items-center justify-center w-9 h-9 rounded-full border border-gray-500 hover:bg-gray-300 hover:text-[#212529] transition-all duration-300 cursor-pointer">
            <FaBars className="text-white text-[16px] transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </div>
      <div
  className={`h-[950px] visible lg:invisible bg-black absolute overflow-y-hidden -mt-[118px] border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden w-full max-w-[300px] ${toggleform ? 'show mx-0' : ''}`}
  style={{ overflowY: 'auto' }}
>
  <div className="my-32 mx-4 h-auto w-full font-sans">
    <div className="flex items-center justify-between space-x-6 px-2">
      <div className="flex items-center space-x-3">
        {/* Logo Icon */}
        <div className="  h-10 w-40 flex items-center justify-center ">
  <img
    src="https://reves-wp.b-cdn.net/wp-content/uploads/2022/04/Reves-Logo.svg"
    alt="7StarDigitizing Logo"
    className="object-contain h-full w-full"  // Use object-contain to preserve aspect ratio
  />
</div>

        {/* Logo Text */}
       
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="text-[25px] text-white cursor-pointer translate-x-[-30px] hover:opacity-80 transition-opacity duration-200"
        onClick={handletoggleform}
      />
    </div>

    <div className="w-full h-[1px] my-5 bg-gray-900"></div>

    {/* Navigation Options */}
    <div className="flex flex-col space-y-6 my-6 mr-10 "> {/* Increased gap here */}
  {[
    "Home",
    "About Us",
    "Projects",
    "Services",
    "Blog",
  
    "Contact",
  ].map((item) => (
    <div key={item}>
      <Link
        to={
          item === "About Us"
            ? "/about"
            : item === "Home"
            ? "/"
            : item === "Projects"
            ? "/projects"
            : item === "Services"
            ? "/services"
            : item === "Blog"
            ? "/blogs"
            : item === "Contact"
            ? "/contact"
            : `/${item.toLowerCase().replace(" ", "")}`
        }
        onClick={() => settoggleform(false)}
        className="text-white font-sansing font-extrabold text-[17px] py-2 w-full hover:text-purple-500 transition-all duration-300"
      >
        {item}
      </Link>
      <div className="w-full h-[1px] bg-gray-900 mt-3"></div> {/* Increased gap after each link */}
    </div>
  ))}
</div>


    {/* Start Project Button */}
    <div className="w-full flex justify-center mt-8">
      <Link
        to="/contact"
        onClick={() => settoggleform(false)}
        className="border border-purple-600 text-purple-600 font-helveticaLight font-bold rounded-md px-6 py-2 text-[16px] hover:bg-purple-600 hover:text-white transition-all duration-300"
      >
        Start Project
      </Link>
    </div>

    {/* Bottom Section with Divider */}
  </div>
</div>







    </>
  );
};

export default Header;

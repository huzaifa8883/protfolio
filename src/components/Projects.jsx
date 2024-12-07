import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift } from '@fortawesome/free-solid-svg-icons'; 
const Projects = () => {

    const navigate = useNavigate(); // For navigation

    const handleClick = (projectId) => {
      // Delay navigation by 2 seconds
      setTimeout(() => {
        navigate(`/project${projectId}`);
      }, 2000); // 2-second delay
    };
  
    const handleClicks = () => {
      // Delay navigation by 2 seconds
      setTimeout(() => {
        navigate("/project1");
      }, 2000); // 2-second delay
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling effect
      });
    };
  return (
    <>
     <div className='h-auto w-full bg-[#17181A] overflow-x-hidden'>
     <div className="lg:h-[350px] h-[200px] mt-16  w-full bg-[#212529] flex flex-col md:flex-row items-center justify-center text-white font-bold">
  {/* Left section with text (full screen width) */}
  <div className="flex flex-col items-center justify-center text-center md:text-left w-full md:w-[50%]">
    {/* Home and About Us with Arrow */}
    <div className="flex items-center text-gray-300 font-raleway space-x-4 text-sm md:text-lg">
      <p>Home</p>
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className="text-white text-xl" 
      />
      <p>Our Projects</p>
    </div>
    
    {/* Larger About Us text below */}
    <p className="mt-6 text-3xl md:text-5xl font-bold font-sans">Our Projects</p>
  </div>

  {/* Right section with image (visible on lg and above) */}
  <div className="hidden lg:block lg:w-[50%] h-full relative">
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/uploads/2022/04/inner-banner-bg.png" 
      alt="About Us" 
      className="w-full h-full object-cover absolute right-0" 
    />
  </div>
</div>

<div className="mb-8 mt-8 text-center flex flex-col px-4 md:flex-row items-center justify-between">
  {/* Left Section: Text */}
  <div className="text-center md:text-left mb-8 md:mb-0 bg-gradient-to-r from-[#2d3e56] via-[#3b4b75] to-[#1e2a38] p-8 rounded-lg shadow-lg w-full md:w-[50%]">
  <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide text-white">
    Look At Our Latest Work
  </h2>
  <p className="text-lg md:text-xl text-gray-300 mb-8">
    We guide game-changing companies, across platforms & places, through agile design & digital experiences. We make waves.
  </p>
  <button 
      onClick={scrollToTop}
      className="bg-gradient-to-r from-[#ff5722] to-[#ff9100] text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-2"
    >
      <span>View All Work</span>
      <FaArrowRight className="text-white" />
    </button>
</div>


  {/* Right Section: Image with Hover Effect */}
  <div className="w-full md:w-[47%] relative group">
      {/* Wrapping image in div and handling the onClick event */}
      <div onClick={handleClicks} className="cursor-pointer">
        <img
          src="https://media.istockphoto.com/id/1347626309/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-buy-clothes.jpg?s=612x612&w=0&k=20&c=SGKPpmCvxMFYld_4MXuSUBFmAcHylKNp2kJgWuszmgw="
          alt="Latest Work"
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />
        {/* Hover Overlay with Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="text-center text-white px-6 py-4">
            <h3 className="text-2xl font-bold">Latest Work: E-Commerce Platform</h3>
            <p className="text-lg">We created a seamless online shopping experience with AI-powered recommendations and real-time inventory management.</p>
          </div>
        </div>
      </div>
    </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 px-4 md:grid-cols-3 gap-6 cursor-pointer">
      {[
        {
          id: 2,
          imgSrc: "https://financesonline.com/uploads/2017/08/rest.jpg",
          title: "We created an intuitive and efficient restaurant management software that helps businesses streamline operations, manage orders, and enhance customer experience."
        },
        {
          id: 3,
          imgSrc: "https://savvycomsoftware.com/wp-content/uploads/2024/09/A-photorealistic-image-representing-blockchain-as-the-cornerstone-of-DePIN-1024x585.webp",
          title: "We developed a cutting-edge blockchain solution to streamline secure transactions and enhance transparency"
        },
        {
          id: 4,
          imgSrc: "https://www.zdnet.com/a/img/resize/5e4939fed2bfd8d06200f4b5ff89bee6e4ca5dbe/2023/08/03/6465b332-9100-4836-b0d8-737809568679/gettyimages-1541246944.jpg?auto=webp&width=1280",
          title: "We built an advanced mobile application designed to revolutionize user engagement through AI-powered personalized recommendations"
        },
      ].map((work) => (
        <div
          key={work.id}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          onClick={() => handleClick(work.id)} // Handle click
        >
          {/* Background Image */}
          <img
            src={work.imgSrc}
            alt={work.title}
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hover Overlay with Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-center text-white px-6 py-4">
              <h3 className="text-xl md:text-2xl font-bold">{work.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="w-full px-4 md:px-8 py-10 mt-9 bg-gradient-to-r from-black via-gray-900 to-black relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative text-center space-y-4 text-white w-[80%] mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold">Don’t Wait, Join With Us Today!</h2>
        <p className="text-lg md:text-xl">Explore Select, Our Premium Solution For Branding & Business.</p>

        {/* Join Now Button */}
        <Link to={"/contact"}>
        <button
          className="mt-6 bg-transparent border-2 border-white text-white px-8 py-3 text-lg rounded-full flex items-center justify-center space-x-3 hover:bg-white hover:text-black transition-all duration-300"
        >
          <span>Join Now</span>
          <FaArrowRight className="text-white hover:text-black transition-all duration-300" />
        </button>
        </Link>
      </div>
    </div>
     </div>
    
    </>
  )
}

export default Projects
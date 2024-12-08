import React from "react";
import { FaBullhorn, FaMobileAlt,FaSearch, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';




const Home = () => {
  const navigate = useNavigate();
 

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
    <div className="bg-gradient-to-r from-[#2b2f3c] via-[#3c4a63] to-[#1e2330] text-white overflow-x-hidden  ">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
  {/* Background Image with additional animations */}
  <div className="absolute inset-0 max-h-[500px] overflow-hidden">
    <img
      src="https://exitbase.pk/wp-content/uploads/classified-listing/2024/02/Running-Software-House-digital-agency-for-sale-2.webp"
      alt="Software Development"
      className="h-full w-full object-cover max-h-[550px] opacity-100 scale-110 transition-all duration-1500 ease-in-out transform group-hover:scale-105 group-hover:blur-sm group-hover:rotate-3"
      style={{
        transition: 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out',
      }}
    />
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  </div>

  {/* Particles Animation */}
  <div className="absolute inset-0 z-0 animate-particle-effect">
    <div className="absolute w-full h-full">
      <div className="absolute w-8 h-8 bg-pink-500 rounded-full animate-particle"></div>
      <div className="absolute w-8 h-8 bg-purple-500 rounded-full animate-particle-delay-2"></div>
      <div className="absolute w-8 h-8 bg-blue-500 rounded-full animate-particle-delay-4"></div>
    </div>
  </div>

  {/* Centered Text Section with Animation */}
  <div className="absolute inset-0 mb-12 flex flex-col items-center justify-center text-white text-center px-6 z-10 animate-fade-in">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight mb-6 transform opacity-0 animate-slide-up">
      We are a leading software company
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 max-w-2xl mx-auto transform opacity-0 animate-slide-up animation-delay-200">
      For the past 5 years, we specialize in developing high-quality software solutions tailored to meet the needs of businesses across industries. Our expert team delivers exceptional results.
    </p>
    <div className="animate-fade-in animation-delay-400">
      <Link to={"/contact"}>
        <button className="px-10 py-4 bg-white text-[#17181A] font-semibold rounded-md shadow-lg hover:bg-[#ff5722] hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Contact Manager
        </button>
      </Link>
    </div>
  </div>
</div>





      {/* Services Section */}
      <div className="py-20  text-center mt-[-160px]">
      <h1 className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6">
Services
    </h1>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-16">
  {[
    { icon: <FaBullhorn />, title: "Digital Marketing", number: "01", isAllServices: false },
    { icon: <FaMobileAlt />, title: "App Development", number: "02", isAllServices: false },
    { icon: <FaLaptopCode />, title: "Web Development", number: "03", isAllServices: false },
    { icon: <FaCube />, title: "Blockchain Development", number: "04", isAllServices: false },
    { icon: <FaGamepad />, title: "Game Development", number: "05", isAllServices: false },
    { icon: <FaDigitalOcean />, title: "All Services", number: "06", isAllServices: true },
  ].map((service, index) => (
    <Link
      key={index}
      to="/services"
      className={`relative group p-6 ${service.isAllServices
        ? "bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A] text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        : "bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A] text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      } border border-gray-700 rounded-lg overflow-hidden h-[180px] md:h-[200px] transition-all duration-300 hover:border-2 hover:border-[#FF6F61]`}>
      
      {/* Glowing border and icon/text hover effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF6F61] transition-all duration-300"></div>

      <div className="flex items-center justify-between h-full relative z-10">
        {/* Number on the Left */}
        <div className={`text-3xl font-semibold ${service.isAllServices ? "text-[#FF6F61]" : "text-white"} group-hover:text-[#FF6F61] transition-all duration-300`}>
          {service.number}
        </div>

        {/* Icon and Title on the Right */}
        <div className="flex flex-col items-start ml-4">
          {/* Service Icon */}
          <div className={`text-4xl mb-2 ${service.isAllServices ? "text-white" : "text-gray-300"} group-hover:text-[#FF6F61] group-hover:scale-105 transition-all duration-200`}>
            {service.icon}
          </div>
          {/* Service Title */}
          <h3 className={`text-md font-semibold mb-2 text-white group-hover:text-[#FF6F61] transition-all duration-300`}>
            {service.title}
          </h3>
        </div>
      </div>

      {/* Explore Button for All Services */}



    </Link>
  ))}
</div>





</div>

<div className="py-16 px-6 md:px-16 bg-[#202124] text-white">
<h1 className="text-6xl text-center text-white font-extrabold text-transparent  mb-6">
Latest Work
    </h1>





  {/* First Row with Text and Image */}
  <div className="mb-12 text-center flex flex-col md:flex-row items-center justify-between">
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
      <div onClick={handleClicks} className="cursor-pointer group relative">
  <img
    src="https://media.istockphoto.com/id/1347626309/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-buy-clothes.jpg?s=612x612&w=0&k=20&c=SGKPpmCvxMFYld_4MXuSUBFmAcHylKNp2kJgWuszmgw="
    alt="Latest Work"
    className="w-full h-[300px] border-4 border-transparent hover:border-indigo-500 object-cover rounded-lg shadow-lg transition-all duration-300"
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



  {/* Second Row for Projects */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
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
      className="relative group overflow-hidden rounded-lg shadow-2xl hover:scale-105 transform transition-all duration-300 border-4 border-transparent hover:border-indigo-500 rounded-lg"
      onClick={() => handleClick(work.id)} // Handle click
    >
      {/* Background Image with Border and Transition */}
      <img
        src={work.imgSrc}
        alt={work.title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg border-4 border-gray-300 group-hover:border-indigo-500"
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

</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-32 my-16">

  
  <div className="h-full w-full flex justify-center items-center">
    <div className="w-full lg:max-w-[500px] bg-transparent border-[1px] border-gray-500 px-6 py-4 flex flex-col justify-center space-y-6">
      <div>
        <h2 className="text-gray-400 font-manrope text-lg font-bold text-center">Why Choose Us?</h2>
      </div>
      
      <div>
        <p className="text-white text-2xl md:text-4xl font-bold text-center font-montserrat">
          We're at the heart of NYC. Our reach is Global.
        </p>
      </div>
     
      <div>
        <p className="text-[#9da1a5] text-sm md:text-lg text-center font-semibold font-roboto">
          Our long experience at the top of the events business means we have expertise which reaches across a number of sectors, as well as knowledge of specific protocol and local.
        </p>
      </div>

     
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-8">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-l-red-500 border-t-red-500 border-r-gray-500 border-b-gray-500 flex justify-center items-center text-white font-semibold text-xl md:text-3xl">
            85%
          </div>
          <p className="text-gray-100 font-bold font-montserrat text-xs md:text-sm">Web Development</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-l-red-500 border-t-red-500 border-r-gray-500 border-b-gray-500 flex justify-center items-center text-white font-semibold text-xl md:text-3xl">
            90%
          </div>
          <p className="text-gray-100 font-bold font-montserrat text-xs md:text-sm">App Development</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-l-red-500 border-t-red-500 border-r-gray-500 border-b-gray-500 flex justify-center items-center text-white font-semibold text-xl md:text-3xl">
            95%
          </div>
          <p className="text-gray-100 font-bold font-montserrat text-xs md:text-sm whitespace-nowrap">Game Development</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full lg:max-w-[550px] h-full mx-auto">
    <img src="https://reves-wp.b-cdn.net/wp-content/uploads/2023/01/abt2.jpg" className="w-full h-full object-cover rounded-md"/>
  </div>
</div>

<h1 className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6">
Our Team
    </h1>



 
  <div class="team-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20 my-10 bg-gradient-to-r from-blue-500 to-indigo-600">
  <div class="team-member relative group overflow-hidden rounded-lg shadow-lg bg-white border-4 border-transparent hover:border-yellow-400 transition-all duration-300">
    <img src="https://media.licdn.com/dms/image/v2/C4E03AQGnJpaM0Pm_Hw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1607150120179?e=2147483647&v=beta&t=0mQSq-GNfT5PodgE45TZtCLpR762bwharNWlEo05ckU" alt="Ozair Umar" class="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Ozair Umar</h3>
        <p class="font-semibold">Founder</p>
        <div class="social-links mt-4 flex justify-center space-x-4">
          <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="team-member relative group overflow-hidden rounded-lg shadow-lg bg-white border-4 border-transparent hover:border-yellow-400 transition-all duration-300">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNn8qNc_KlQVL-yRLSEvRLbgTrKR2kKsn-AQ&s" alt="Hadrish Ali" class="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Hadrish Ali</h3>
        <p class="font-semibold">Project Manager</p>
        <div class="social-links mt-4 flex justify-center space-x-4">
          <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

 
  <div class="team-member relative group overflow-hidden rounded-lg shadow-lg bg-white border-4 border-transparent hover:border-yellow-400 transition-all duration-300">
    <img src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F1163586%2Fpicture%2Foptimized%2Fhuge_f223a9ecd2457e11ac4fee276a3d13e5-014ca66144c43d6e1190a2263f0c6dc1.jpg&width=480" alt="Muhammad Huzaifa" class="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Muhammad Huzaifa</h3>
        <p class="font-semibold">Product Manager</p>
        <div class="social-links mt-4 flex justify-center space-x-4">
          <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

 
  <div class="team-member relative group overflow-hidden rounded-lg shadow-lg bg-white border-4 border-transparent hover:border-yellow-400 transition-all duration-300">
    <img src="https://usamaejaz.com/images/me.jpg" alt="Ahmed Ali" class="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Ahmed Ali</h3>
        <p class="font-semibold">Senior Software Engineer</p>
        <div class="social-links mt-4 flex justify-center space-x-4">
          <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  
  <div class="team-member relative group overflow-hidden rounded-lg shadow-lg bg-white border-4 border-transparent hover:border-yellow-400 transition-all duration-300">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY6sx2W6wToUQKNL-9TOKWVPfXJGGBVXiew&s" alt="Usman Noman" class="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Usman Noman</h3>
        <p class="font-semibold">UX/UI Designer</p>
        <div class="social-links mt-4 flex justify-center space-x-4">
          <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

 
  <div class="team-member relative group overflow-hidden rounded-lg shadow-lg bg-white border-4 border-transparent hover:border-yellow-400 transition-all duration-300">
    <img src="https://media.licdn.com/dms/image/v2/C5103AQEtJeiGgnidjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1539449595814?e=2147483647&v=beta&t=-x7mgI1KZDbdZaXQYpfvUe8zLQQY_dKUv54UBc2a7sQ" alt="Muhammad Usman" class="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Muhammad Usman</h3>
        <p class="font-semibold">HR Manager</p>
        <div class="social-links mt-4 flex justify-center space-x-4">
          <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

<h1 className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6">
Our Blogs
    </h1>
<div class="blogs-section my-10 px-4 md:px-20">

  <div class="blogs-intro mb-10 md:w-1/2 xl:w-1/3 p-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden">

    <div class="absolute inset-0 bg-gradient-to-br from-purple-700 via-transparent to-indigo-900 opacity-20 rounded-3xl"></div>
    <div class="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-3xl opacity-30"></div>

    <div class="relative z-10">
      <h2 class="text-5xl font-extrabold mb-6 text-transparent bg-clip-text ">
        Discover Our Insights
      </h2>
      <p class="text-lg mb-8 text-gray-900 font-sans font-light leading-relaxed">
        We empower transformative brands with innovative design and impactful digital experiences that create lasting impressions.
      </p>
      <a href="/blogs"
         class="inline-block px-8 py-4 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Explore Articles
      </a>
    </div>
  </div>







<div class="blog-posts md:w-2/3">

  <div class="blog-post flex mb-6">
    <div class="blog-post-inner w-full flex border-2 border-white rounded-md shadow-lg">
      <div class="blog-image w-1/2 pr-4">
        <img src="https://nastp.gov.pk/assets_main/img/divs/sd1.JPG" alt="Blog Image 1" class="w-full h-auto object-cover rounded-md"/>
      </div>
      <div class="blog-content w-1/2 p-4">
        <p class="text-sm text-gray-500 mb-2">December 2, 2023</p>
        <h3 class="text-2xl font-bold mb-3">Why Choose Our Software House?</h3>
        <p class="text-sm text-gray-700 mb-4">Discover why we are the best choice for your software development needs.</p>
        <a href="/blogs" class="text-red-500 font-semibold">Read More</a>
      </div>
    </div>
  </div>

  <div class="blog-post flex mb-6">
    <div class="blog-post-inner w-full flex border-2 border-white rounded-md shadow-lg">
      <div class="blog-image w-1/2 pr-4">
        <img src="https://www.hdwallpapers.in/download/abstract_tech_man_4k_8k_hd-1920x1080.jpg" alt="Blog Image 2" class="w-full h-auto object-cover rounded-md"/>
      </div>
      <div class="blog-content w-1/2 p-4">
        <p class="text-sm text-gray-500 mb-2">December 6, 2022</p>
        <h3 class="text-2xl font-bold mb-3">Our Journey in the Tech Industry</h3>
        <p class="text-sm text-gray-700 mb-4">A look at how we evolved in the ever-changing tech landscape.

</p>
        <a href="/blogs" class="text-red-500 font-semibold">Read More</a>
      </div>
    </div>
  </div>
</div>


</div>
<h1 className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6">
Testimonials
    </h1>
  <div class="client-reviews-section bg-gradient-to-b from-gray-900 via-black to-gray-900 py-6 mb-10  px-6 md:px-20 text-white">

<div class="reviews-intro text-center mb-14">
  <h2 class="text-5xl md:text-6xl font-extrabold font-helveticaLight mb-6 text-gray-100 tracking-tight">
    What Our Clients Say
  </h2>
  <p class="text-xl text-gray-400 font-montserrat leading-relaxed max-w-2xl mx-auto">
    Discover how our clients have transformed their businesses with our innovative designs and tailored digital solutions.
  </p>
</div>

<div class="reviews-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">

 

  <div class="review-card bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
  <div class="flex items-center mb-5">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4isAJgXN-dw-Yu8L0GaxDrMPn1x1h9txPw&s"
      alt="Client 4"
      class="w-16 h-16 object-cover rounded-full shadow-md"
    />
    <div class="ml-4">
      <h4 class="text-xl font-semibold text-gray-100">Samiya Iqbal</h4>
      <p class="text-sm text-gray-400">Founder of TechGuru</p>
    </div>
  </div>
  <p class="text-gray-300 font-manrope leading-relaxed mb-5">
    "CodersCrafter helped us bring our ideas to life with a seamless digital experience. The team’s professionalism and innovation were exceptional."
  </p>
  <div class="social-icons flex space-x-4">
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-twitter"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-instagram"></i></a>
  </div>
</div>

<div class="review-card bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
  <div class="flex items-center mb-5">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9bQpNy6wTJxpHmzYXdo3FXHrnacijv1J-g&s"
      alt="Client 5"
      class="w-16 h-16 object-cover rounded-full shadow-md"
    />
    <div class="ml-4">
      <h4 class="text-xl font-semibold text-gray-100">Farhan Ali</h4>
      <p class="text-sm text-gray-400">CEO of DigitalZone</p>
    </div>
  </div>
  <p class="text-gray-300 font-manrope leading-relaxed mb-5">
    "Working with CodersCrafter was a great experience. They provided us with cutting-edge web solutions that made a real difference to our business."
  </p>
  <div class="social-icons flex space-x-4">
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-twitter"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-instagram"></i></a>
  </div>
</div>

<div class="review-card bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
  <div class="flex items-center mb-5">
    <img
      src="https://media.licdn.com/dms/image/v2/D4E03AQFGSDA1Vijm6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707892519986?e=2147483647&v=beta&t=9grdg1tuC6WJAiCIA645lrgXEte7Skj6N8XufpdV4Xo"
      alt="Client 6"
      class="w-16 h-16 object-cover rounded-full shadow-md"
    />
    <div class="ml-4">
      <h4 class="text-xl font-semibold text-gray-100">Saeed Anwar</h4>
      <p class="text-sm text-gray-400">Founder of Anwar Tech</p>
    </div>
  </div>
  <p class="text-gray-300 font-manrope leading-relaxed mb-5">
    "CodersCrafter’s team was fantastic in understanding our business goals and providing us with customized solutions that took our operations to the next level."
  </p>
  <div class="social-icons flex space-x-4">
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-twitter"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-instagram"></i></a>
  </div>
</div>
<div class="review-card bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
  <div class="flex items-center mb-5">
    <img
      src="https://media.licdn.com/dms/image/v2/D4D03AQH2N5oA8QIcuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1639821074936?e=2147483647&v=beta&t=WEHbq_A-ownuGbYynuw5xXS_pRT6wdWcI3kJntSaeKY"
      alt="Client 7"
      class="w-16 h-16 object-cover rounded-full shadow-md"
    />
    <div class="ml-4">
      <h4 class="text-xl font-semibold text-gray-100">Ahmed Shahzad</h4>
      <p class="text-sm text-gray-400">Co-Founder of Tech Innovators</p>
    </div>
  </div>
  <p class="text-gray-300 font-manrope leading-relaxed mb-5">
    "CodersCrafter delivered beyond our expectations. Their team is highly skilled, responsive, and always ready to provide valuable insights to improve our business."
  </p>
  <div class="social-icons flex space-x-4">
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-twitter"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-instagram"></i></a>
  </div>
</div>

<div class="review-card bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
  <div class="flex items-center mb-5">
    <img
      src="https://media.licdn.com/dms/image/v2/C4D03AQE1sR3D5atOqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1615447733978?e=2147483647&v=beta&t=-BjUk1YvyFb4i9RxnMJ4jRiGY6t-QjartnA-x2t2XwE"
      alt="Client 8"
      class="w-16 h-16 object-cover rounded-full shadow-md"
    />
    <div class="ml-4">
      <h4 class="text-xl font-semibold text-gray-100">Hassan Raza</h4>
      <p class="text-sm text-gray-400">Marketing Lead at Bright Solutions</p>
    </div>
  </div>
  <p class="text-gray-300 font-manrope leading-relaxed mb-5">
    "CodersCrafter provided us with top-notch digital marketing solutions. Their strategies and designs have helped us grow our customer base significantly."
  </p>
  <div class="social-icons flex space-x-4">
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-twitter"></i></a>
    <a href="#" class="text-gray-400 hover:text-red-500 transition"><i class="fab fa-instagram"></i></a>
  </div>
</div>



</div>
</div>






</div>
  );
};

export default Home;
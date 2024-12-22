import React from "react";
import { FaBullhorn, FaMobileAlt,FaSearch, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';




const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://exitbase.pk/wp-content/uploads/classified-listing/2024/02/Running-Software-House-digital-agency-for-sale-2.webp",

    "https://media.istockphoto.com/id/636609180/photo/developers-at-work.jpg?b=1&s=612x612&w=0&k=20&c=Y_MjGyhqrah_tDgBhH8xISsfdsVMMK_FpQawsJ99b8Y=",

    "https://img.freepik.com/free-photo/software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team_482257-33535.jpg"
  ];

  const variants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

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
  const introVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const postVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a5e] via-[#4b2e2e] to-[#d72638]




 text-white overflow-x-hidden  ">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
  {/* Background Image with additional animations */}
  <div className="absolute inset-0 max-h-[560px] overflow-hidden">
  <motion.img
        key={currentImageIndex} // Key to trigger re-render
        src={images[currentImageIndex]} // Only render current image
        alt="Slider Image"
        className="h-full w-full object-cover max-h-[600px]"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          opacity: { duration: 1.5, ease: "easeInOut" },
          transform: { duration: 1.5, ease: "easeInOut" },
        }}
        variants={variants}
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
  <motion.div
  className="absolute inset-0 mb-12 flex flex-col items-center justify-center text-white text-center px-6 z-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Heading Animation */}
  <motion.h1
    className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight mb-6"
    initial={{ opacity: 0, y: -20 }} // Initial position above
    animate={{ opacity: 1, y: 0 }}   // Final position at normal
    transition={{
      duration: 1,
      delay: 0.3,
      ease: "easeInOut", // Smooth easing
    }}
  >
    We are a leading software company
  </motion.h1>

  {/* Paragraph Animation */}
  <motion.p
    className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: -20 }} // Initial position above
    animate={{ opacity: 1, y: 0 }}   // Final position at normal
    transition={{
      duration: 1,
      delay: 0.6,
      ease: "easeInOut", // Smooth easing
    }}
  >
    For the past 5 years, we specialize in developing high-quality software
    solutions tailored to meet the needs of businesses across industries.
    Our expert team delivers exceptional results.
  </motion.p>

  {/* Button Animation */}
  <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 1,
      ease: "easeInOut", // Smooth easing
    }}
  >
    <Link to={"/contact"}>
      <button className="px-10 py-4 bg-white text-[#17181A] font-semibold rounded-md shadow-lg hover:bg-[#ff5722] hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        Contact Manager
      </button>
    </Link>
  </motion.div>
</motion.div>






</div>





      {/* Services Section */}
      <div className="py-20  text-center mt-[-160px]">
      <motion.h1
  className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: 1.1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}
>
  Services
  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-30 blur-lg"></span>
  
  {/* Distressed Text Effect */}
  <span className="absolute inset-0 text-shadow-xl opacity-50 filter blur-sm contrast-150 saturate-200"></span>

  {/* Glitch Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-40 blur-md animate-glitch"></span>
</motion.h1>


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
        ? "bg-gradient-to-br from-[#2d2d2d] via-[#4a4a4a] to-[#1a1a1a] text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        : "bg-gradient-to-br from-[#3a1f1f] via-[#4a3d3d] to-[#1a1a1a]  text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      } border border-gray-700 rounded-lg overflow-hidden h-[180px] md:h-[200px] transition-all duration-300 hover:border-2 hover:border-[#FF5F56]`}
    >
      {/* Glowing border and icon/text hover effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF5F56] transition-all duration-300"></div>

      <div className="flex items-center justify-between h-full relative z-10">
        {/* Number on the Left */}
        <div className={`text-3xl font-semibold ${service.isAllServices ? "text-[#FF5F56]" : "text-white"} group-hover:text-[#FF5F56] transition-all duration-300`}>
          {service.number}
        </div>

        {/* Icon and Title on the Right */}
        <div className="flex flex-col items-start ml-4">
          {/* Service Icon */}
          <div className={`text-4xl mb-2 ${service.isAllServices ? "text-white" : "text-gray-300"} group-hover:text-[#FF5F56] group-hover:scale-105 transition-all duration-200`}>
            {service.icon}
          </div>
          {/* Service Title */}
          <h3 className={`text-md font-semibold mb-2 text-white group-hover:text-[#FF5F56] transition-all duration-300`}>
            {service.title}
          </h3>
        </div>
      </div>
    </Link>
  ))}
</div>








</div>

<div className="py-16 px-6 md:px-16  text-white">
<motion.h1
  className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: 1.1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}
>
Latest Work
  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-30 blur-lg"></span>
  
  {/* Distressed Text Effect */}
  <span className="absolute inset-0 text-shadow-xl opacity-50 filter blur-sm contrast-150 saturate-200"></span>

  {/* Glitch Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-40 blur-md animate-glitch"></span>
</motion.h1>





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

<div className="flex flex-col items-center gap-8 px-4 md:px-32 my-16">
  <div className="w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] border-[1px] border-gray-500 px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 animate-fadeIn shadow-xl rounded-2xl">
    {/* Left Content Section */}
    <div className="flex flex-col justify-center space-y-8 w-full lg:w-1/2">
      <div>
        <h2 className="text-[#b2fef7] font-manrope text-lg font-extrabold uppercase text-center lg:text-left animate-slideInLeft">
          Why Choose Us?
        </h2>
      </div>

      <div>
        <p className="text-[#ffffff] text-3xl md:text-5xl font-extrabold text-center lg:text-left font-montserrat animate-slideInLeft delay-100">
          Bridging Global Connections, Locally Rooted.
        </p>
      </div>

      <div>
        <p className="text-[#d0d7dc] text-base md:text-lg text-center lg:text-left font-medium font-roboto animate-slideInLeft delay-200">
          Our unique combination of experience, local expertise, and a global perspective ensures your projects succeed no matter the scale. From NYC to the world, we’re your trusted partner.
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-10 py-6">
        {[
          { title: "Innovative Solutions", percentage: "87%" },
          { title: "Reliable Support", percentage: "92%" },
          { title: "Global Outreach", percentage: "98%" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 group animate-bounceIn delay-150"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#1cd8d2] to-[#93edc7] flex justify-center items-center text-gray-800 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 ease-in-out">
              {item.percentage}
            </div>
            <p className="text-[#e8f9ff] font-semibold font-montserrat text-sm md:text-base text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image Section with Two Images in Separate Lines */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4">
      {/* Image 1 */}
      <img
        src="https://media.istockphoto.com/id/636609180/photo/developers-at-work.jpg?b=1&s=612x612&w=0&k=20&c=Y_MjGyhqrah_tDgBhH8xISsfdsVMMK_FpQawsJ99b8Y="
        className="w-full h-48 md:h-64 object-cover rounded-2xl transition-transform duration-500 hover:scale-105 shadow-md"
        alt="Developers at Work"
      />
      {/* Image 2 */}
      <img
        src="https://adus.tech/wp-content/uploads/2020/03/custom_soft.jpg"
        className="w-full h-48 md:h-64 object-cover rounded-2xl transition-transform duration-500 hover:scale-105 shadow-md"
        alt="Team Collaboration"
      />
    </div>
  </div>
</div>







 


<motion.h1
  className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: 1.1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}
>
  Our Blogs
  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-30 blur-lg"></span>
  
  {/* Distressed Text Effect */}
  <span className="absolute inset-0 text-shadow-xl opacity-50 filter blur-sm contrast-150 saturate-200"></span>

  {/* Glitch Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-40 blur-md animate-glitch"></span>
</motion.h1>
    <div className="blogs-section my-10 px-4 md:px-20">
      {/* Intro Section */}
      <motion.div
        className="blogs-intro mb-10 md:w-1/2 xl:w-1/3 p-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl hover:shadow-3xl relative overflow-hidden"
        variants={introVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-transparent to-indigo-900 opacity-20 rounded-3xl"></div>
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text">
            Discover Our Insights
          </h2>
          <p className="text-lg mb-8 text-gray-900 font-sans font-light leading-relaxed">
            We empower transformative brands with innovative design and impactful digital experiences that create lasting impressions.
          </p>
          <a
            href="/blogs"
            className="inline-block px-8 py-4 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore Articles
          </a>
        </div>
      </motion.div>

      {/* Blog Posts */}
      <div className="blog-posts md:w-2/3">
        {[
          {
            id: 1,
            img: "https://nastp.gov.pk/assets_main/img/divs/sd1.JPG",
            date: "December 2, 2023",
            title: "Why Choose Our Software House?",
            desc: "Discover why we are the best choice for your software development needs.",
          },
          {
            id: 2,
            img: "https://www.hdwallpapers.in/download/abstract_tech_man_4k_8k_hd-1920x1080.jpg",
            date: "December 6, 2022",
            title: "Our Journey in the Tech Industry",
            desc: "A look at how we evolved in the ever-changing tech landscape.",
          },
        ].map((post, index) => (
          <motion.div
            key={post.id}
            className="blog-post flex mb-6"
            variants={postVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="blog-post-inner w-full flex border-2 border-white rounded-md shadow-lg">
              <div className="blog-image w-1/2 pr-4">
                <img
                  src={post.img}
                  alt={`Blog Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <div className="blog-content w-1/2 p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{post.desc}</p>
                <a href="/blogs" className="text-red-500 font-semibold">
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <motion.h1
  className="text-6xl text-center text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: 1.1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}
>
Testimonials
  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-30 blur-lg"></span>
  
  {/* Distressed Text Effect */}
  <span className="absolute inset-0 text-shadow-xl opacity-50 filter blur-sm contrast-150 saturate-200"></span>

  {/* Glitch Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-40 blur-md animate-glitch"></span>
</motion.h1>
<div class="client-reviews-section bg-gradient-to-b from-red-900 via-black to-black py-6 mb-10 px-6 md:px-20 text-white">
  <div class="reviews-intro text-center mb-14">
    <h2 class="text-5xl md:text-6xl font-extrabold font-helveticaLight mb-6 text-gray-100 tracking-tight">
      What Our Clients Say
    </h2>
    <p class="text-xl text-gray-200 font-montserrat leading-relaxed max-w-2xl mx-auto">
      Discover how our clients have transformed their businesses with our innovative designs and tailored digital solutions.
    </p>
  </div>

  <div class="reviews-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    <div class="review-card bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
      <div class="flex items-center mb-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4isAJgXN-dw-Yu8L0GaxDrMPn1x1h9txPw&s" alt="Client 4" class="w-16 h-16 object-cover rounded-full shadow-md" />
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

    <div class="review-card bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
      <div class="flex items-center mb-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9bQpNy6wTJxpHmzYXdo3FXHrnacijv1J-g&s" alt="Client 5" class="w-16 h-16 object-cover rounded-full shadow-md" />
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

    <div class="review-card bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105">
      <div class="flex items-center mb-5">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFGSDA1Vijm6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707892519986?e=2147483647&v=beta&t=9grdg1tuC6WJAiCIA645lrgXEte7Skj6N8XufpdV4Xo" alt="Client 6" class="w-16 h-16 object-cover rounded-full shadow-md" />
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
  </div>
</div>









</div>
  );
};

export default Home;
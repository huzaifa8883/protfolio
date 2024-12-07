import React from "react";
import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
    <div className="bg-[#17181A] text-white overflow-x-hidden  ">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 max-h-[500px] overflow-hidden">
          <img
            src="https://nexttechnology.io/app/uploads/2021/09/recruitment-agency-vs-software-house.png"
            alt="Software Development"
            className="h-full w-full object-cover max-h-[550px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Centered Text Section */}
        <div className="absolute inset-0 mb-12 flex flex-col items-center justify-center text-white text-center px-6 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight mb-6">
            We are a leading software company
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
            For the past 5 years, we specialize in developing high-quality software solutions tailored to meet the needs of businesses across industries. Our expert team delivers exceptional results.
          </p>
          <div>
            <Link to={"/contact"}>
            <button className="px-10 py-4 bg-white text-[#17181A] font-semibold rounded-md shadow-lg hover:bg-[#ff5722] hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contact Manager
            </button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-orange-500 to-red-600 opacity-70 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-bl from-blue-500 to-purple-600 opacity-70 blur-2xl animate-bounce-slow"></div>
      </div>

      {/* Services Section */}
      <div className="py-20  text-center mt-[-160px]">
      <div class="relative text-center">


<img 
  src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dotted.svg" 
  alt="Rotating Image" 
  class="rotating-image absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 -mt-8  md:-mt-10 "
/>

<img 
  src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dot-frame.svg" 
  alt="Fading Image" 
  class="fading-image absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 -mt-8 md:-mt-10 md:-mr-2"
/>


<h1 class="text-center text-6xl font-bold mb-12 text-white z-50 text-transparent bg-clip-text tracking-tight ">
  <span class="border-b-2 border-gray-500">Services</span>
</h1>



</div>


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
      to="/services" // All services will link to /services page
      className={`relative group p-6 ${
        service.isAllServices
          ? "bg-gradient-to-br from-[#202124] to-[#434343] text-white shadow-xl hover:shadow-2xl transform hover:scale-105"
          : "bg-gradient-to-br from-[#202124] to-[#434343] text-white shadow-lg hover:shadow-xl transform hover:scale-105"
      } border border-gray-500 rounded-lg overflow-hidden h-[150px] transition-all duration-300 hover:border-2 hover:border-red-500`}
    >
      {/* Add Red Border and Icon/Text Hover Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-300"></div>

      {/* Flex Container for Number, Icon, and Text */}
      <div className="flex items-center justify-between h-full relative z-10">
        {/* Number on the Left */}
        <div
          className={`text-4xl font-bold ${
            service.isAllServices ? "text-[#ff5722]" : "text-white"
          } transition-colors duration-300 group-hover:text-red-500`}
        >
          {service.number}
        </div>

        {/* Icon and Title on the Right */}
        <div className="flex flex-col items-start ml-4">
          {/* Service Icon */}
          <div
            className={`text-5xl mb-2 ${
              service.isAllServices ? "text-white" : "text-gray-300"
            } transition-colors duration-300 group-hover:text-red-500`}
          >
            {service.icon}
          </div>
          {/* Service Title */}
          <h3
            className={`text-xl font-semibold mb-2 ${
              service.isAllServices ? "text-white" : "text-white"
            } group-hover:text-red-500 transition-all duration-300`}
          >
            {service.title}
          </h3>
        </div>
      </div>

      {/* Explore Button (only for All Services) */}
      {service.isAllServices && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {/* Uncomment the button below if needed */}
          {/* <button className="bg-[#ff5722] text-white py-2 px-6 rounded-lg hover:bg-[#ff9100] transition-colors duration-300">
            Explore All Services
          </button> */}
        </div>
      )}
    </Link>
  ))}
</div>
</div>

<div className="py-16 px-6 md:px-16 bg-[#202124] text-white">
<div class="relative text-center">
 
  <img 
    src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dotted.svg" 
    alt="Rotating Image" 
    class="rotating-image absolute top-0 left-0 w-16 h-16 -mt-10 -ml-4"
  />
  
 
  <img 
    src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dot-frame.svg" 
    alt="Fading Image" 
    class="fading-image absolute top-0 right-0 w-16 h-16 -mt-10 -mr-10"
  />
  

  <h1 class="text-center md:text-6xl text-5xl font-bold mb-12 text-white whitespace-nowrap z-50 text-transparent bg-clip-text tracking-tight">
    <span class="border-b-2 border-gray-500">Latest Work</span>
  </h1>
</div>





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
<div class="relative text-center mb-6">
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dotted.svg" 
      alt="Rotating Image" 
      class="rotating-image absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 -mt-8 md:-mt-10"
    />
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dot-frame.svg" 
      alt="Fading Image" 
      class="fading-image absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 -mt-8 md:-mt-10 md:-mr-2"
    />
    <h1 class="text-center text-6xl font-bold text-white text-transparent bg-clip-text tracking-tight">
      <span class="border-b-2 border-gray-500">Our Team</span>
    </h1>
  </div>
<div class="team-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20 my-10">
 
  

 
  <div class="team-member relative group">
    <img src="https://media.licdn.com/dms/image/v2/C4E03AQGnJpaM0Pm_Hw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1607150120179?e=2147483647&v=beta&t=0mQSq-GNfT5PodgE45TZtCLpR762bwharNWlEo05ckU" alt="Mokarram Hossain" class="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Ozair Umar</h3>
        <p class="font-semibold">Founder</p>
        <div class="social-links mt-4">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="team-member relative group">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNn8qNc_KlQVL-yRLSEvRLbgTrKR2kKsn-AQ&s" alt="Mokarram Hossain" class="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">hadrish ali</h3>
        <p class="font-semibold">Project Manager</p>
        <div class="social-links mt-4">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="team-member relative group">
    <img src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F1163586%2Fpicture%2Foptimized%2Fhuge_f223a9ecd2457e11ac4fee276a3d13e5-014ca66144c43d6e1190a2263f0c6dc1.jpg&width=480" alt="Mokarram Hossain" class="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Muhammad Huzaifa</h3>
        <p class="font-semibold">Product Manager</p>
        <div class="social-links mt-4">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="team-member relative group">
    <img src="https://usamaejaz.com/images/me.jpg" alt="Mokarram Hossain" class="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Ahmed Ali</h3>
        <p class="font-semibold">Senior Software Engineer</p>
        <div class="social-links mt-4">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="team-member relative group">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY6sx2W6wToUQKNL-9TOKWVPfXJGGBVXiew&s" alt="Mokarram Hossain" class="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Usman Noman</h3>
        <p class="font-semibold">UX/UI Designer

</p>
        <div class="social-links mt-4">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="team-member relative group">
    <img src="https://media.licdn.com/dms/image/v2/C5103AQEtJeiGgnidjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1539449595814?e=2147483647&v=beta&t=-x7mgI1KZDbdZaXQYpfvUe8zLQQY_dKUv54UBc2a7sQ" alt="John Doe" class="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 hover:scale-105"/>
    <div class="team-info absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="text-center text-white px-4 py-6">
        <h3 class="text-xl font-bold">Muhammad Usman</h3>
        <p class="font-semibold">HR Manager</p>
        <div class="social-links mt-4">
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

</div>
<div class="relative text-center mb-6">
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dotted.svg" 
      alt="Rotating Image" 
      class="rotating-image absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 -mt-8 md:-mt-10"
    />
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dot-frame.svg" 
      alt="Fading Image" 
      class="fading-image absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 -mt-8 md:-mt-10 md:-mr-2"
    />
    <h1 class="text-center text-6xl font-bold text-white text-transparent bg-clip-text tracking-tight">
      <span class="border-b-2 border-gray-500">Our Blog</span>
    </h1>
  </div>
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
<div class="relative text-center mb-6">
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dotted.svg" 
      alt="Rotating Image" 
      class="rotating-image absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 -mt-8 md:-mt-10"
    />
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/themes/reves-wp-theme-master/assets/images/icon/dot-frame.svg" 
      alt="Fading Image" 
      class="fading-image absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 -mt-8 md:-mt-10 md:-mr-2"
    />
    <h1 class="text-center text-6xl font-bold text-white text-transparent bg-clip-text tracking-tight">
      <span class="border-b-2 border-gray-500">Testimonial</span>
    </h1>
  </div>
<div class="client-reviews-section bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 px-6 md:px-20 text-white">

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
          src="https://reves-wp.b-cdn.net/wp-content/uploads/2023/01/testimonial-01.jpg"
          alt="Client 1"
          class="w-16 h-16 object-cover rounded-full shadow-md"
        />
        <div class="ml-4">
          <h4 class="text-xl font-semibold text-gray-100">Abdullah Ansary</h4>
          <p class="text-sm text-gray-400">UI/UX Designer</p>
        </div>
      </div>
      <p class="text-gray-300 font-manrope leading-relaxed mb-5">
        "The team offered exceptional advice and crafted a brand that represents our values beautifully. It will be the cornerstone of our identity for years."
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
          src="https://reves-wp.b-cdn.net/wp-content/uploads/2023/01/testimonial-02.jpg"
          alt="Client 2"
          class="w-16 h-16 object-cover rounded-full shadow-md"
        />
        <div class="ml-4">
          <h4 class="text-xl font-semibold text-gray-100">Maria Alishba</h4>
          <p class="text-sm text-gray-400">CEO of Reves</p>
        </div>
      </div>
      <p class="text-gray-300 font-manrope leading-relaxed mb-5">
        "Their expertise brought a whole new dimension to our project. I couldn’t have asked for a more talented and supportive team."
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsZoNxCCnJmbQJstybM8biFfTe708op30bg&s"
          alt="Client 3"
          class="w-16 h-16 object-cover rounded-full shadow-md"
        />
        <div class="ml-4">
          <h4 class="text-xl font-semibold text-gray-100">Ali Khan</h4>
          <p class="text-sm text-gray-400">Marketing Manager</p>
        </div>
      </div>
      <p class="text-gray-300 font-manrope leading-relaxed mb-5">
        "Their creativity and attention to detail amazed us. They turned our vision into a reality with a perfect digital strategy."
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
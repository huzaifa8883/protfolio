import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <>
    <div className='h-auto w-full bg-[#17181A] overflow-x-hidden '>
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
      <p>About Us</p>
    </div>
    
    {/* Larger About Us text below */}
    <p className="mt-6 text-3xl md:text-5xl font-bold font-sans">About Us</p>
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
<div className="flex flex-col lg:flex-row items-center justify-between gap-4 mx-[20px] lg:mx-[50px] my-10">
  {/* Left section with image */}
  <div className="w-full lg:w-[45%] h-[400px] lg:h-[540px] relative">
  {/* Large Background Image */}
  <img 
    src="https://reves-wp.b-cdn.net/wp-content/uploads/2023/01/abt1.jpg" 
    alt="About Reve's" 
    className="w-full h-full object-cover"
  />
  
  {/* Div with Black Background, Centered Text and Icon */}
  <div className="w-[250px] h-[60px] font-roboto absolute top-0 left-0 bg-[#17181a] flex items-center justify-center text-white font-semibold text-lg  shadow-lg space-x-2">
    <FontAwesomeIcon icon={faTrophy} className="text-yellow-400 text-xl" />
    <span>05 Years Experience</span>
  </div>
</div>



  {/* Right section with text content */}
  <div className="w-full lg:max-w-[500px] bg-transparent border-[1px] border-gray-500 px-4 lg:px-8 py-6 flex flex-col justify-center space-y-6 lg:space-y-8 h-full">
    {/* Heading */}
    <div>
      <h2 className="text-gray-400 font-manrope text-lg font-bold text-center">About Coderscrafter</h2>
    </div>

    {/* Main Text Section (First Text Larger) */}
    <div className="text-center">
      <p className="text-white text-2xl lg:text-3xl md:text-4xl font-semibold font-montserrat mb-4">
        We drive experiences for brands with purpose.
      </p>
    </div>

    {/* Smaller Text Section */}
    <div className="text-center">
      <p className="text-[#9da1a5] text-sm lg:text-base md:text-[17px] font-semibold font-raleway mb-6">
        We're west coast change-makers, in a complex world. The brands we support are positioned to be purposeful and powerful while also fluid.
      </p>
    </div>

    {/* Additional Text with Arrow Icons */}
    <div className="flex flex-col items-start space-y-6 mt-6 mx-8">
      {[
        "Creating with a Special or Unique Process",
        "A Radical Change",
        "Procession Special Skill or Knowledge",
      ].map((item, index) => (
        <div key={index} className="relative flex items-center space-x-3">
          <p className="text-[#9da1a5] text-sm md:text-[15px] font-semibold font-roboto z-10 pr-8">{item}</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-xl absolute left-[-50px] z-0 opacity-30 top-1/2 transform -translate-y-1/2"
          />
        </div>
      ))}

      {/* Read More Button */}
      <div className="mt-6 lg:mt-10 text-center">
        <Link to="/blogs">
        <button className="px-6 py-2 border border-gray-500 text-white font-semibold rounded-md bg-transparent hover:bg-gray-500 hover:text-white transition duration-300">
          Read More
        </button>
        </Link>
      </div>
    </div>
  </div>
</div>




<div className="w-full  py-16">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
   
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

</>

  
  
  )
}

export default Aboutus
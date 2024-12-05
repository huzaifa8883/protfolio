import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift } from '@fortawesome/free-solid-svg-icons'; 

const Aboutus = () => {
  return (
    <>
    <div className='h-auto w-full bg-[#17181A]'>
<div className="lg:h-[350px] h-[200px]  w-full bg-[#212529] flex flex-col md:flex-row items-center justify-center text-white font-bold">
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
      <h2 className="text-gray-400 font-manrope text-lg font-bold text-center">About Reve's</h2>
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
        <button className="px-6 py-2 border border-gray-500 text-white font-semibold rounded-md bg-transparent hover:bg-gray-500 hover:text-white transition duration-300">
          Read More
        </button>
      </div>
    </div>
  </div>
</div>




<div className="w-full bg-[#17181A] py-16">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
      
      {/* Expert People */}
      <div className="relative bg-[#2c2f36] p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative z-10 mb-8">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/584c56b5be659489bb1ae965/1556919976504-CN9HTN7INHRD56G0QUAK/How+Do+You+Become+a+People+Expert%3F.jpg" 
            alt="Expert People" 
            className="w-32 h-32 rounded-full border-4 border-[#1a1d1f] object-cover shadow-xl mb-4 mx-auto transition-all duration-300 transform hover:scale-110"
          />
          <FontAwesomeIcon icon={faUsers} className="text-5xl text-[#505658] mb-4" />
        </div>
        <p className="text-4xl font-semibold mb-2">10</p>
        <p className="text-lg font-medium">Expert People</p>
      </div>

      {/* Satisfied Clients */}
      <div className="relative bg-[#2c2f36] p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative z-10 mb-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1HMRHMOLHS_OhVihk9dF1O3uMS6Jj-qfCA&s" 
            alt="Satisfied Clients" 
            className="w-32 h-32 rounded-full border-4 border-[#1a1d1f] object-cover shadow-xl mb-4 mx-auto transition-all duration-300 transform hover:scale-110"
          />
          <FontAwesomeIcon icon={faSmile} className="text-5xl text-[#5d626a] mb-4" />
        </div>
        <p className="text-4xl font-semibold mb-2">150</p>
        <p className="text-lg font-medium">Satisfied Clients</p>
      </div>

      {/* Software Downloads */}
      <div className="relative bg-[#2c2f36] p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative z-10 mb-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBx3w9MCUpisKPouk7UwNGXwc4dZqTjAsQw&s" 
            alt="Software Downloads" 
            className="w-32 h-32 rounded-full border-4 border-[#1a1d1f] object-cover shadow-xl mb-4 mx-auto transition-all duration-300 transform hover:scale-110"
          />
          <FontAwesomeIcon icon={faDownload} className="text-5xl text-[#1e4f5a] mb-4" />
        </div>
        <p className="text-4xl font-semibold mb-2">500</p>
        <p className="text-lg font-medium">Software Downloads</p>
      </div>

      {/* Innovative Solutions */}
      <div className="relative bg-[#2c2f36] p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative z-10 mb-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88AHNFUxpQWbl3qV16h5dmWn9qsW8kKBk4Q&s" 
            alt="Innovative Solutions" 
            className="w-32 h-32 rounded-full border-4 border-[#1a1d1f] object-cover shadow-xl mb-4 mx-auto transition-all duration-300 transform hover:scale-110"
          />
          <FontAwesomeIcon icon={faGift} className="text-5xl text-[#7a5e00] mb-4" />
        </div>
        <p className="text-4xl font-semibold mb-2">400</p>
        <p className="text-lg font-medium">Innovative Solutions</p>
      </div>
      
    </div>
  </div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-20 ">

  
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

  <div className="w-full lg:max-w-[550px] mx-auto">
    <img src="https://reves-wp.b-cdn.net/wp-content/uploads/2023/01/abt2.jpg" className="w-full object-cover rounded-md"/>
  </div>
</div>
<div class="relative text-center mt-20 mb-4">
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
    <h1 class="text-center text-6xl font-bold bg-gradient-to-r from-black to-gray-300 text-transparent bg-clip-text tracking-tight">
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

</>

  
  
  )
}

export default Aboutus
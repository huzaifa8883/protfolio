import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift } from '@fortawesome/free-solid-svg-icons'; 
import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";

const Blogs = () => {
    const blogs = [
        {
          title: "Why Choose Our Software House?",
          description: "Discover why we are the best choice for your software development needs.",
          slug: "why-choose-us",
          image: "https://nastp.gov.pk/assets_main/img/divs/sd1.JPG",
        },
        {
          title: "Our Journey in the Tech Industry",
          description: "A look at how we evolved in the ever-changing tech landscape.",
          slug: "our-journey",
          image: "https://www.hdwallpapers.in/download/abstract_tech_man_4k_8k_hd-1920x1080.jpg",
        },
        {
          title: "Top Web Development Trends in 2024",
          description: "Learn about the latest trends in web development that we are implementing.",
          slug: "web-development-trends-2024",
          image: "https://api.reliasoftware.com/uploads/web_development_is_important_176fa0618e.jpg",
        },
        {
          title: "Mobile Apps: Why You Need Them",
          description: "Find out how a custom mobile app can boost your business.",
          slug: "why-mobile-apps",
          image: "https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-an-app-mobile-phone-with-a-bunch-of-app-icons-image_2601980.jpg",
        },
        {
          title: "Blockchain Solutions for the Future",
          description: "Explore how blockchain is transforming industries and how we leverage it.",
          slug: "blockchain-solutions",
          image: "https://media.licdn.com/dms/image/v2/D4E12AQHMF8Y7V6-jCw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1692786101137?e=2147483647&v=beta&t=Y293IyvTvxU8qEXp9wDFXQW_htcaFMQr4jmw_s7ugB4",
        },
      ];
      
  return (
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
      <p>Our Blogs</p>
    </div>
    
    {/* Larger About Us text below */}
    <p className="mt-6 text-3xl md:text-5xl font-bold font-sans">Our Blogs</p>
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
<div className="min-h-screen bg-[#17181a] text-white py-16 px-4 font-raleway">
  {/* Page Title */}
  <div className="text-center mb-12">
  <h1 className="inline-block text-6xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6">
    Our Blogs
  </h1>
  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
    Explore our latest articles and insights to stay ahead in the industry.
  </p>
</div>


  {/* Blog Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
  {blogs.map((blog, index) => (
    <div
      key={index}
      className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:border-indigo-500 border-2 border-transparent"
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Blog Content */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-extrabold text-gray-100">{blog.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{blog.description}</p>
        <Link
          to={`/blog/${blog.slug}`}
          className="inline-block text-indigo-400 font-semibold hover:text-indigo-500 transition-colors text-lg"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  ))}
</div>

</div>
<div className="w-full px-4 md:px-8 py-10 mt-9 bg-gradient-to-r from-black via-gray-900 to-black relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative text-center space-y-4 text-white w-[80%] mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold">Don’t Wait, Join With Us Today!</h2>
        <p className="text-lg md:text-xl">Explore Select, Our Premium Solution For Branding & Business.</p>

        {/* Join Now Button */}
        <button
          className="mt-6 bg-transparent border-2 border-white text-white px-8 py-3 text-lg rounded-full flex items-center justify-center space-x-3 hover:bg-white hover:text-black transition-all duration-300"
        >
          <span>Join Now</span>
          <FaArrowRight className="text-white hover:text-black transition-all duration-300" />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Blogs
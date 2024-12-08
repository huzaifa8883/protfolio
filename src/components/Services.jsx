import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift } from '@fortawesome/free-solid-svg-icons'; 
import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";
const Services = () => {
    const services = [
        {
          title: "Website Development",
          price: "15,000",
          features: [
            "Responsive Design",
            "SEO Optimized",
            "E-commerce Integration",
            "Custom CMS",
            "Fast Loading Speed",
            "Cross-Browser Compatibility",
            "Custom Plugins Development",
            "Ongoing Maintenance",
          ],
          bgGradient: "from-blue-500 via-blue-600 to-blue-700",
        },
        {
          title: "App Development",
          price: "25,000",
          features: [
            "Cross-Platform Apps",
            "UI/UX Design",
            "API Integration",
            "App Store Deployment",
            "Push Notifications",
            "Real-Time Data Sync",
            "Offline Support",
            "Performance Optimization",
          ],
          bgGradient: "from-purple-500 via-purple-600 to-purple-700",
        },
        {
          title: "Blockchain Projects",
          price: "40,000",
          features: [
            "Smart Contracts",
            "Decentralized Apps",
            "Token Development",
            "Blockchain Consulting",
            "Wallet Integration",
            "NFT Creation & Marketplaces",
            "Secure Transactions",
            "Data Privacy",
          ],
          bgGradient: "from-green-500 via-green-600 to-green-700",
        },
        {
          title: "Gaming Projects",
          price: "Custom Pricing",
          features: [
            "3D Game Development",
            "AR/VR Integration",
            "Multiplayer Support",
            "Game Design & Assets",
            "Cross-Platform Compatibility",
            "In-Game Purchases",
            "Physics Simulation",
            "Custom Game Engines",
          ],
          bgGradient: "from-red-500 via-red-600 to-red-700",
        },
        {
          title: "AI/ML Solutions",
          price: "50,000",
          features: [
            "Custom AI Models",
            "Predictive Analytics",
            "Natural Language Processing",
            "AI Integration",
            "Computer Vision Solutions",
            "Reinforcement Learning",
            "Data Preprocessing & Cleaning",
            "Custom Chatbots",
          ],
          bgGradient: "from-yellow-500 via-yellow-600 to-yellow-700",
        },
        {
          title: "E-Commerce Solutions",
          price: "20,000",
          features: [
            "Custom Storefront Design",
            "Payment Gateway Integration",
            "Inventory Management",
            "Order Tracking",
            "User Analytics",
            "Product Recommendation Engines",
            "Mobile-Friendly Design",
            "SEO for E-Commerce",
          ],
          bgGradient: "from-teal-500 via-teal-600 to-teal-700",
        },
        {
          title: "Digital Marketing",
          price: "10,000",
          features: [
            "Social Media Marketing",
            "Google Ads Campaigns",
            "SEO Services",
            "Email Marketing",
            "Content Creation",
            "Influencer Marketing",
            "Conversion Rate Optimization",
            "Analytics Reporting",
          ],
          bgGradient: "from-pink-500 via-pink-600 to-pink-700",
        },
        {
          title: "UI/UX Design",
          price: "15,000",
          features: [
            "Wireframing & Prototyping",
            "Interactive Designs",
            "User Research",
            "Custom Components",
            "Design System Creation",
            "Accessibility Compliance",
            "Cross-Device Testing",
            "Iterative Improvements",
          ],
          bgGradient: "from-indigo-500 via-indigo-600 to-indigo-700",
        },
        {
          title: "DevOps & Cloud Services",
          price: "35,000",
          features: [
            "AWS & Azure Solutions",
            "CI/CD Pipeline Setup",
            "Containerization",
            "Server Maintenance",
            "Cloud Migration",
            "Infrastructure as Code",
            "Backup & Disaster Recovery",
            "24/7 Monitoring",
          ],
          bgGradient: "from-gray-700 via-gray-800 to-gray-900",
        },
      ];
      
  return (
    <div className=' bg-[#17181A] text-white overflow-x-hidden'>
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
      <p>Our Services</p>
    </div>
    
    {/* Larger About Us text below */}
    <p className="mt-6 text-3xl md:text-5xl font-bold font-sans">Our Services</p>
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

 
  

<div className="min-h-screen bg-[#17181a] flex flex-col items-center justify-center p-6">
  <div className="relative text-center mb-16">
    <h1 className="text-6xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-6">
      Our Services
    </h1>
    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
      Discover our range of services designed to help your business grow and thrive. Let us take you to the next level.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {services.map((service, index) => (
      <div
        key={index}
        className={`rounded-3xl p-8 shadow-xl bg-gradient-to-br ${service.bgGradient} transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
        style={{
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #333)",
        }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">{service.title}</h2>
        <p className="text-2xl font-semibold text-gray-300 mb-6">
          {service.price === "Custom Pricing" ? (
            <span>{service.price}</span>
          ) : (
            <span>Starting at ₹{service.price}</span>
          )}
        </p>
        <ul className="mb-6 text-gray-200 space-y-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-lg">
              <svg
                className="w-5 h-5 text-teal-400 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <a href="/contact">
          <button className="w-full px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-teal-600 to-purple-600 rounded-full hover:scale-105 hover:bg-gradient-to-br hover:from-teal-700 hover:to-purple-700 transition-transform duration-300">
            Contact Us
          </button>
        </a>
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
  )
}

export default Services
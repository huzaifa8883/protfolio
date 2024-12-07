import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa"

import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift,faStar } from '@fortawesome/free-solid-svg-icons'
const Project3 = () => {
    const navigate = useNavigate(); // For navigation

    const handleClick = (projectId) => {
        if (projectId === 3) {
          // Scroll to the top if projectId is 2
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
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
    <div className='h-auto w-full bg-[#17181A] overflow-x-hidden'>
    <div className="lg:h-[350px] mt-16 h-[200px]  w-full bg-[#212529] flex flex-col md:flex-row items-center justify-center text-white font-bold">
 {/* Left section with text (full screen width) */}
 <div className="flex flex-col items-center justify-center text-center md:text-left w-full md:w-[50%]">
   {/* Home and About Us with Arrow */}
   <div className="flex items-center text-gray-300 font-raleway space-x-4 text-sm md:text-lg">
     <p>Home</p>
     <FontAwesomeIcon 
       icon={faArrowRight} 
       className="text-white text-xl" 
     />
     <p>Solution for Secure Transactions</p>
   </div>
   
   {/* Larger About Us text below */}
   <p className="mt-6 text-3xl md:text-5xl font-bold font-sans text-center">Solution for Secure Transactions</p>
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
<div className="flex items-center justify-center min-h-screen bg-[#18191a] ">
 <div className="bg-[#202124] mx-auto my-12 md:my-28 h-auto max-w-[90%] md:max-w-[850px] rounded-lg overflow-hidden">
   {/* Image Section */}
   <div className="h-[300px] md:h-[400px] w-full">
     <img
       className="h-full w-full object-cover"
       src="https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg"
       alt="Branding"
     />
   </div>

   {/* Content Section */}
   <div className="px-10 py-6">
     {/* Heading */}
     <h1 className="text-[#9da1a5] font-semibold font-raleway text-sm md:text-[15px] mb-4">
     Cutting-Edge Blockchain Solution for Secure Transactions
     </h1>

     {/* Paragraph 1 */}
     <p className="text-[#c8c8c8] font-semibold font-raleway text-sm md:text-[16px] leading-6 md:leading-7 mb-6">
     We developed a cutting-edge blockchain solution designed to streamline secure transactions and enhance transparency. By leveraging blockchain technology, we provided a decentralized platform that ensures the integrity and security of every transaction     </p>

     {/* Paragraph 2 */}
     <p className="text-[#c8c8c8] font-semibold font-raleway text-sm md:text-[16px] leading-6 md:leading-7 mb-6">
     This solution eliminates the need for intermediaries, reducing transaction costs and increasing efficiency. Through its transparent nature, the system allows users to track transactions in real-time, providing full visibility and trust.     </p>

     {/* Key Points Section */}
     <div className="mb-6">
       <h2 className="text-gray-200 font-bold text-base font-raleway md:text-lg mb-4">
       The solution is scalable, adaptable to various industries, and built to meet the highest standards of security       </h2>
       <div className="flex flex-col space-y-4">
         {[
           "Secure Transactions",
           "Real-Time Transparency",
           "Decentralized Platform",
           "Scalable & Adaptable",
           "Enhanced Security",
           

         ].map((item, index) => (
           <div key={index} className="flex items-center space-x-2">
             <FontAwesomeIcon
               icon={faArrowRight}
               className="text-[#9da1a5] text-lg"
             />
             <p className="text-[#9da1a5] font-raleway text-sm md:text-[15px] font-semibold">
               {item}
             </p>
           </div>
         ))}
       </div>
     </div>

     {/* Closing Statement */}
  

     <a href="https://hydrachain.org/" target="_blank">
  <button class="px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-full transition-all duration-300 transform hover:bg-blue-500 hover:text-white hover:border-blue-700 focus:outline-none">
    Click here to see project
  </button>
</a>


   </div>
 </div>
</div>
<div className="w-full flex justify-center items-center mt-8 bg-[#18191a] ">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6">
   {/* Image 1 */}
   <div className="relative group">
     <img
       src="https://www.shutterstock.com/shutterstock/videos/3427438385/thumb/1.jpg?ip=x480"
       alt="Project Details 1"
       className="h-[250px] w-full rounded-lg border-4 border-gray-700 object-cover transition-transform duration-300 group-hover:scale-105"
     />
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
   </div>

   {/* Image 2 */}
   <div className="relative group">
     <img
       src="https://img.freepik.com/premium-photo/cryptocurrency-security-blockchain-technology_1102-4340.jpg"
       alt="Project Details 2"
       className="h-[250px] w-full rounded-lg border-4 border-gray-700 object-cover transition-transform duration-300 group-hover:scale-105"
     />
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
   </div>

   {/* Image 3 */}
   <div className="relative group">
     <img
       src="https://c0.wallpaperflare.com/preview/124/110/387/block-blockchain-business-chain.jpg"
       alt="Project Details 3"
       className="h-[250px] w-full rounded-lg border-4 border-gray-700 object-cover transition-transform duration-300 group-hover:scale-105"
     />
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
   </div>
 </div>
</div>

<div className="w-full bg-gradient-to-r from-[#23272b] to-[#2d2f31] py-14 px-8 mb-12">
 {/* Section Title */}
 <h2 className="text-3xl md:text-4xl text-center font-sans text-white font-extrabold mb-10">
   Client Feedback of This Project:
 </h2>

 {/* Feedback Card */}
 <div className="w-full max-w-4xl mx-auto bg-[#2d2f31] rounded-lg shadow-2xl p-8 space-y-6">
   <div className="flex flex-col items-center text-center">
     {/* Client Profile */}
     <img
       src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
       alt="Client Profile"
       className="h-24 w-24 rounded-full border-4 border-[#1c1e1f] mb-6 shadow-xl transform transition-transform hover:scale-105 duration-300"
     />
     <h3 className="text-2xl text-white font-semibold mb-2 font-raleway tracking-wide">Sophia Johnson</h3>
     <p className="text-sm text-gray-300 mb-4 font-roboto tracking-tight">CEO</p>

     {/* Testimonial Content */}
     <p className="text-gray-200 mt-4 leading-7 mb-4 max-w-xl mx-auto font-light font-raleway tracking-wide">
     Partnering with this team to implement a cutting-edge blockchain solution has been a game-changer for our business. The level of security and transparency that blockchain provides is unparalleled. Our transactions are now safer, and our customers feel more confident interacting with us. The team’s expertise in blockchain technology allowed them to seamlessly integrate this solution into our system. We've seen an improvement in trust and efficiency, and it’s been a great investment for our long-term success</p>


     {/* Rating */}
     <div className="flex justify-center space-x-2 mt-4">
       <span className="text-yellow-400">
         <FontAwesomeIcon icon={faStar} size="lg" />
       </span>
       <span className="text-yellow-400">
         <FontAwesomeIcon icon={faStar} size="lg" />
       </span>
       <span className="text-yellow-400">
         <FontAwesomeIcon icon={faStar} size="lg" />
       </span>
       <span className="text-yellow-400">
         <FontAwesomeIcon icon={faStar} size="lg" />
       </span>
       <span className="text-yellow-400">
         <FontAwesomeIcon icon={faStar} size="lg" />
       </span>
     </div>

     {/* Social Proof Icons */}
     <div className="flex space-x-8 justify-center mt-6">
       <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
         <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
       </a>
       <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
         <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
       </a>
       <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
         <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
       </a>
     </div>
   </div>
 </div>
</div>





<div className="mb-8 mt-8 text-center flex flex-col px-4 md:flex-row items-center justify-between">
  {/* Left Section: Text */}
  <div className="text-center md:text-left mb-8 md:mb-0 bg-gradient-to-r from-[#2d3e56] via-[#3b4b75] to-[#1e2a38] p-8 rounded-lg shadow-lg w-full md:w-[50%]">
  <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide text-white">
    Related Work
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
      <div    onClick={handleClicks} className="cursor-pointer">
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
   


{/* </div> */}

   </div>
  )
}

export default Project3
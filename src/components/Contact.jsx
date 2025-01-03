import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

import axios from 'axios';
import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift,faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [feedback, setFeedback] = useState({ success: '', error: '' });
  const [submittedRequests, setSubmittedRequests] = useState([]);


  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    try {
      // Send data to the backend using Axios
      const response = await axios.post('/api/data/createcontact', formData);
      setFeedback({ success: 'Message sent successfully!', error: '' });
      setSubmittedRequests((prev) => [...prev, formData]);

      console.log('Response:', response.data);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      setFeedback({ success: '', error: 'Failed to send the message. Please try again later.' });
      console.error('Error:', error);
    }
  };


  return (
    <div className='h-auto w-full bg-[#17181A] overflow-x-hidden'>
          <div className="lg:h-[350px] h-[200px] mt-16  w-full bg-gradient-to-r from-red-500 via-black to-red-800 flex flex-col md:flex-row items-center justify-center text-white font-bold">
  {/* Left section with text (full screen width) */}
  <div className="flex flex-col items-center justify-center text-center md:text-left w-full md:w-[50%]  p-8 rounded-xl shadow-lg space-y-6">
  {/* Home and About Us with Arrow */}
  <motion.div 
    className="flex items-center text-gray-300 font-raleway space-x-4 text-sm md:text-lg"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <p>Home</p>
    <FontAwesomeIcon 
      icon={faArrowRight} 
      className="text-white text-xl" 
    />
    <p>Contact Us</p>
  </motion.div>
  
  {/* Larger Contact Us text below */}
  <motion.p
    className="mt-6 text-3xl md:text-5xl font-bold font-sans bg-gradient-to-r from-red-800 via-black to-red-900 text-white bg-clip-text"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.2 }}
  >
    Contact Us
  </motion.p>

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
<div className="bg-gradient-to-br from-[#4e5b6ebd] via-[#2f3e50] to-[#1a2328] text-white py-20 px-6 font-sans">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Location Card */}
    <motion.div 
      className="bg-gradient-to-br from-[#334a56] to-[#2e3f47] border border-gray-600 rounded-2xl shadow-2xl p-8 text-center hover:border-blue-500 hover:scale-105 transition-all duration-300"
      initial={{ opacity: 0, y: 30, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" }} 
      animate={{ opacity: 1, y: 0, boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)" }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.8)" }}
    >
      <div className="flex items-center justify-center w-20 h-20 bg-[#4e5b6e] rounded-full mx-auto mb-6">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-3xl" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 tracking-wide">Location</h3>
      <p className="text-lg text-gray-300 leading-relaxed font-medium">
        Sargodha road sui gas office near pearl city
        <br />
        Faisalabad, Pakistan
      </p>
    </motion.div>

    {/* Phone Card */}
    <motion.div 
      className="bg-gradient-to-br from-[#334a56] to-[#2e3f47] border border-gray-600 rounded-2xl shadow-2xl p-8 text-center hover:border-blue-500 hover:scale-105 transition-all duration-300"
      initial={{ opacity: 0, y: 30, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" }} 
      animate={{ opacity: 1, y: 0, boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)" }} 
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.8)" }}
    >
      <div className="flex items-center justify-center w-20 h-20 bg-[#4e5b6e] rounded-full mx-auto mb-6">
        <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-3xl" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 tracking-wide">Phone</h3>
      <p className="text-lg text-gray-300 leading-relaxed font-medium">
        +923278363169
        <br />
        +923278363169
      </p>
    </motion.div>

    {/* Email Card */}
    <motion.div 
      className="bg-gradient-to-br from-[#334a56] to-[#2e3f47] border border-gray-600 rounded-2xl shadow-2xl p-8 text-center hover:border-blue-500 hover:scale-105 transition-all duration-300"
      initial={{ opacity: 0, y: 30, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" }} 
      animate={{ opacity: 1, y: 0, boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)" }} 
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.8)" }}
    >
      <div className="flex items-center justify-center w-20 h-20 bg-[#4e5b6e] rounded-full mx-auto mb-6">
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 tracking-wide">Email</h3>
      <p className="text-lg text-gray-300 leading-relaxed font-medium">
     qhuzaifa675@gmail.com
        <br />
        qhuzaifa675@gmail.com
      </p>
    </motion.div>

  </div>
</div>






<div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 mt-8 font-sans">
  <div className="max-w-4xl mx-auto bg-opacity-80 bg-[#1a202c] border border-gray-700 rounded-xl shadow-xl p-8">
    <motion.h2
      className="text-4xl font-extrabold mb-6 text-center tracking-wide font-['Poppins']"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Get in Touch
    </motion.h2>
    <motion.p
      className="text-gray-300 text-lg text-center mb-10 font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Feel free to reach out to us with your queries or feedback.
    </motion.p>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <label htmlFor="name" className="block text-lg font-medium mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <label htmlFor="email" className="block text-lg font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <label htmlFor="phone" className="block text-lg font-medium mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <label htmlFor="subject" className="block text-lg font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter the subject"
          className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <label htmlFor="message" className="block text-lg font-medium mb-2">
          Enter Your Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          rows="5"
          className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        ></textarea>
      </motion.div>
      <div className="text-center">
        <motion.button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Send Now
        </motion.button>
      </div>
    </form>

    {feedback.success && (
      <p className="mt-4 text-green-500 text-center">{feedback.success}</p>
    )}
    {feedback.error && (
      <p className="mt-4 text-red-500 text-center">{feedback.error}</p>
    )}
  </div>

  {/* Submitted Requests List */}
  {submittedRequests.length > 0 && (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-center mb-4">Submitted Requests</h3>
      <ul className="space-y-4">
        {submittedRequests.map((request, index) => (
          <motion.li
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <p className="text-lg font-semibold">Thank you, {request.name}!</p>
            <p className="text-gray-400">
              Your request has been submitted. We will contact you in 1 to 2 days.
              Thanks!
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )}
</div>







    </div>
  )
}

export default Contact
import React from 'react'
import { useState } from 'react';
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
      <p>Contact Us</p>
    </div>
    
    {/* Larger About Us text below */}
    <p className="mt-6 text-3xl md:text-5xl font-bold font-sans">Contact Us</p>
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
<div className="bg-[#202124] text-white py-20 px-6 font-sans">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Location Card */}
    <div className="bg-[#17181a] border border-gray-700 rounded-xl shadow-lg p-8 text-center hover:border-red-500 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center w-20 h-20 bg-black rounded-full mx-auto mb-6">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-4xl" />
      </div>
      <h3 className="text-3xl font-extrabold mb-4 tracking-wide">Location</h3>
      <p className="text-xl text-gray-300 leading-relaxed font-semibold">
        168/170, Ave 01, Old York Drive
        <br />
        Dhaka, Bangladesh
      </p>
    </div>

    {/* Phone Card */}
    <div className="bg-[#17181a] border border-gray-700 rounded-xl shadow-lg p-8 text-center hover:border-red-500 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center w-20 h-20 bg-black rounded-full mx-auto mb-6">
        <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-4xl" />
      </div>
      <h3 className="text-3xl font-extrabold mb-4 tracking-wide">Phone</h3>
      <p className="text-xl text-gray-300 leading-relaxed font-semibold">
        +880171-770000
        <br />
        +8801761111456
      </p>
    </div>

    {/* Email Card */}
    <div className="bg-[#17181a] border border-gray-700 rounded-xl shadow-lg p-8 text-center hover:border-red-500 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center w-20 h-20 bg-black rounded-full mx-auto mb-6">
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-4xl" />
      </div>
      <h3 className="text-3xl font-extrabold mb-4 tracking-wide">Email</h3>
      <p className="text-xl text-gray-300 leading-relaxed font-semibold">
        support@example.com
        <br />
        info@example.com
      </p>
    </div>
  </div>
</div>


<div className="bg-transparent text-white px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-opacity-80 bg-[#202124] border border-gray-700 rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-extrabold mb-6 text-center tracking-wide font-['Poppins']">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg text-center mb-10 font-light">
          Feel free to reach out to us with your queries or feedback.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Enter Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
              className="w-full bg-transparent border border-gray-600 text-gray-300 rounded-lg px-4 py-3 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send Now
            </button>
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
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-4">
            Submitted Requests
          </h3>
          <ul className="space-y-4">
            {submittedRequests.map((request, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md text-center"
              >
                <p className="text-lg font-semibold">
                  Thank you, {request.name}!
                </p>
                <p className="text-gray-400">
                  Your request has been submitted. We will contact you in 1 to
                  2 days. Thanks!
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>





    </div>
  )
}

export default Contact
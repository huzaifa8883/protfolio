import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaDribbble,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 font-raleway"
    >
      <div className="container mx-auto px-4 lg:px-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2 tracking-wide text-blue-400">
              Contact Us
            </h3>
            <p className="text-sm font-medium">
              Email:{' '}
              <a
                href="mailto:info@example.com"
                className="hover:text-blue-500 transition"
              >
                sitedesk
              </a>
            </p>
            <p className="text-sm font-medium">
              Address: House#168/170, Road#02, Ave#01, XYZ, ABC, Bangladesh
            </p>
            <p className="text-sm font-medium">
              Phone:{' '}
              <a
                href="tel:+8801761111456"
                className="hover:text-blue-500 transition"
              >
                +8801761111456
              </a>{' '}
              /{' '}
              <a
                href="tel:+026935865"
                className="hover:text-blue-500 transition"
              >
                +026935865
              </a>
            </p>
          </div>

          {/* Get Updates Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2 tracking-wide text-blue-400">
              Get The Updates
            </h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Type your Email"
                className="p-2 bg-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition font-medium">
                Submit
              </button>
            </form>
            <p className="text-gray-400 text-sm font-medium">
              We only send interesting and relevant emails.
            </p>
          </div>

          {/* Explore Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2 tracking-wide text-blue-400">
              Explore On
            </h3>
            <ul className="space-y-1 text-sm font-medium">
              {[
                'Home',
                'Meet Our Team',
                'Our Portfolio',
                'Feedback',
                'Agency Minimal',
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6 md:mb-0">
              {[FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaDribbble].map(
                (Icon, index) => (
                  <a
                    href="#"
                    key={index}
                    className="text-xl hover:text-blue-500 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>

            {/* Copyright Info */}
            <p className="text-gray-400 text-sm font-medium">
              Copyright © 2022 Reves | Design By Egens Lab
            </p>
          </div>

          {/* Privacy Policy and Terms */}
          <div className="text-center mt-4">
            <a
              href="#"
              className="hover:text-blue-500 transition mx-2 text-sm font-medium"
            >
              Privacy Policy
            </a>
            |
            <a
              href="#"
              className="hover:text-blue-500 transition mx-2 text-sm font-medium"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

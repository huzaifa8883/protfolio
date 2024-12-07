import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-opacity-80 z-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-transparent border-b-transparent border-l-white border-r-gray-500 rounded-full animate-spin"></div>
      
      {/* Loading Text */}
      <p className="text-white text-lg mt-4 animate-pulse">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;

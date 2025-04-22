import React from 'react';

export default function Profile() {
  return (
    <div className="fixed top-17 right-4 h-60 w-60 bg-white p-4 flex flex-col justify-between shadow-lg rounded-lg">
      <div className="upper_section flex justify-between mt-0">
        <p className="text-lg font-semibold text-black">ReportNow</p>
        <a href="/" className="text-gray-800 hover:underline">Sign Out</a>
      </div>
      
      <div className="mid_section flex items-center mt-5 justify-between">
        <img 
          src="https://image.lexica.art/md2_webp/0c009bf1-ba8d-43b7-9cf7-fb259640ad25" 
          alt="Profile" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="mt-3 text-xl font-semibold text-gray-800">Name</p>
      </div>
      
      <div className="lower_section mt-5">
        <p className="text-gray-600">@examplle.com</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import video from "../assets/video.mp4"
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault()
    navigate(`/search/${searchQuery}`)
    
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-10 " />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center drop-shadow-lg">
          Find Your Perfect Ride
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl text-center">
          Explore a premium selection of cars tailored to your journey.
        </p>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl w-full max-w-2xl mx-auto rounded-xl p-4">
          <form onSubmit={handleSearch}>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-800 rounded-md flex-1 px-4 py-2">
              <Search className="text-teal-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for cars..."
                className="ml-3 w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type='submit' className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium transition duration-200 shadow-md">
              Search
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import React from 'react';
import TrendingCard from '../../pages/TrendingCard';


const Cars = () => {

  return (
    <div className="py-16 bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-300 mb-10">Trending Cars</h2>
       <TrendingCard/>
      </div>
    </div>
  );
};

export default Cars;

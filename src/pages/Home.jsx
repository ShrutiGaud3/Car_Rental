import React, { useEffect } from 'react'
import {  Car, Shield, Clock, Phone, MapPin,  Mail , Facebook , Twitter , Instagram } from 'lucide-react';
import TrendingCars from '../components/ui/TrendingCars';

import HeroSection from './HeroSection';

// import CarCarousel from '../components/ui/CarCarousel';

const Home = () => {
   
  useEffect(()=>{
      window.scrollTo(0 , 0)
  },[])
    
  
  return (
    <>
<div className="min-h-screen bg-gray-50 ">
     

   <HeroSection/>

   <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-gray-800 rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
            <p className="text-gray-300">
              Latest models equipped with high-end features to make every drive memorable.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
            <p className="text-gray-300">
              Drive stress-free knowing every vehicle is covered with top-tier insurance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-300">
              Our expert support team is always on standby to help you, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>




      {/* <CarCarousel/> */}

   
     

      

     <TrendingCars/>

     
     

      {/* Contact Section */}
      <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need Assistance?
        </h2>
        <p className="text-gray-300 mb-6 text-lg">
          Our support team is ready 24/7 to help you get on the road.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-blue-600 p-3 rounded-full shadow-md">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-semibold text-white tracking-wide">
            1-800-CAR-RENT
          </span>
        </div>
      </div>
    </div>

     
    </div>

    </>
  )
}

export default Home
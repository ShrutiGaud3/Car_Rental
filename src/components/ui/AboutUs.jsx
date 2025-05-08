import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../assets/carimage2.jpg'

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-teal-400 font-bold mb-2">About Company</h1>
          <p className="text-gray-300">At CarRental, we believe that renting a car should be just as smooth and enjoyable as driving one. Since our inception in 2010, we’ve been committed to redefining mobility by offering top-quality vehicles, competitive pricing, and unmatched customer service. Whether it’s a quick business trip or a family getaway, we provide reliable and clean vehicles tailored to your journey. Backed by a passionate team and a customer-first approach, we’re proud to be a trusted name in car rentals.

</p>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 px-4 md:px-20 bg-gray-800 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Best Car Rental Deals</h2>
            <p className="mb-6 text-gray-400">
              We provide a premium fleet of clean and reliable cars with unmatched service since 2010. Our customers enjoy competitive pricing, instant booking, and 24/7 assistance.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li>✔ Competitive Prices</li>
              <li>✔ Breakdown Assistance</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-200 font-semibold">Call us for your next ride</p>
              <p className="text-teal-400 text-xl font-bold">(+62)21-2002-2012</p>
            </div>
          </div>
          <div>
            <img 
              src={car} 
              alt="Red Car" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Clean Cars Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We offer clean cars for everyone</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Our team ensures each vehicle is thoroughly cleaned and sanitized, providing a safe and comfortable ride.
          </p>
          <Link
            to="/trending_cars" 
            className="inline-block text-black bg-teal-400 hover:bg-teal-500 px-6 py-3 rounded-full font-semibold"
          >
            Discover More
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-20 bg-gray-800 text-white">
  <h2 className="text-3xl font-bold mb-12 text-center text-teal-300">Our Services</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <p className="text-xl font-semibold mb-2">🚗 One-Day Car Rental</p>
      <p className="text-gray-300 text-sm">Perfect for short trips, errands, or quick business visits.</p>
    </div>
    
    <div className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <p className="text-xl font-semibold mb-2">🕒 Long Term Car Rental</p>
      <p className="text-gray-300 text-sm">Affordable plans for weekly or monthly car rental needs.</p>
    </div>
    
    <div className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <p className="text-xl font-semibold mb-2">📦 Cargo Vans & Trucks</p>
      <p className="text-gray-300 text-sm">Move with ease using our spacious cargo fleet.</p>
    </div>
    
    <div className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <p className="text-xl font-semibold mb-2">🗓️ Weekend Car Rental</p>
      <p className="text-gray-300 text-sm">Escape the city or plan a quick getaway this weekend.</p>
    </div>
    
    <div className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <p className="text-xl font-semibold mb-2">👥 Meetings & Group Travel</p>
      <p className="text-gray-300 text-sm">Comfortable and spacious options for group needs.</p>
    </div>
    
    <div className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <p className="text-xl font-semibold mb-2">🎓 Student Car Rental</p>
      <p className="text-gray-300 text-sm">Special rates and flexible plans for students on the go.</p>
    </div>
    
  </div>
</section>


    

    
    </div>
  );
};

export default AboutUs;

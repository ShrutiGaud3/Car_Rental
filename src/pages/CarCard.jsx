import React from 'react'
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
  
    
  return (
    <div className="">
   
     
        
            <div
            key={car._id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {car.name}
              </h3>
              <div className="flex justify-between text-gray-300 text-sm mb-4">
                <span>{car.fuelType}</span>
                <span className="font-bold text-emerald-400">${car.rate}</span>
              </div>
              <Link to={`/car/${car._id}`}>
                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-2 rounded-md transition duration-200">
             View Details
                 </button>
                 </Link>
            </div>
          </div>
        

        
     
  
  </div>
  )
}

export default CarCard
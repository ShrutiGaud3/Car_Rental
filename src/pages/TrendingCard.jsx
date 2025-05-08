
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import { getCars } from '../features/cars/carSlice';
import Loader from '../components/Loader';

const TrendingCard = () => {

  
    const {
        cars,
        isLoading,
        isError,
        message,
        currentPage ,
        totalPages 
      } = useSelector((state) => state.car);

      const [page, setPage] = useState(currentPage || 1);
      const [size , setSize] = useState(10);
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getCars({ page, limit: size }));
      }, [dispatch, page, size]); // Only run on page/size change
      
      useEffect(() => {
        if (isError && message) {
          toast.error(message);
        }
      }, [isError, message]); // Separate error handling
    
      if (isLoading) {
        return <Loader/>;
      }
  return (
    <>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {cars.map((car, index) => (
      <div
        key={index}
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
    ))}

     {/* pagination */}
  
  </div>
     <div className="flex justify-center items-center gap-4 p-6 mt-8">
     <button
       onClick={() => setPage((prev) => Math.max(prev - 1, 1))} // Page ko ek kam karo
       disabled={page === 1} // Agar page 1 pe ho to Prev button disable
       className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 transition"
     >
       Prev
     </button>
   
     <span className="text-sm font-medium text-gray-300">
       Page {page} of {totalPages} {/* currentPage ko page se replace kiya */}
     </span>
   
     <button
       onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} // Page ko ek zyada karo
       disabled={page === totalPages} // Agar last page pe ho to Next button disable
       className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 transition"
     >
       Next
     </button>
   </div>
   </>
  )
}

export default TrendingCard
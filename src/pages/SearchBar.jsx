import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findCar } from '../features/cars/carSlice';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  // console.log(query);
  

  const {
    cars = [], 
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(findCar(query));
    
    
   
  }, [dispatch ,query]);



  useEffect(()=>{
    if (isError && message) {
      toast.error(message);
    }
  },[isError , message])

  if (isLoading) return <Loader />;

  return (
    <div className="py-16 bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-300 mb-10">
          Search Results
        </h2>

        {cars.length === 0 ? (
          <p className="text-center text-gray-300">No cars found for "{query}"</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.length >0 &&  cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

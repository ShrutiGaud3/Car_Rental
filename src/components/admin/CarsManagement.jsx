import React, { useEffect, useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import AddEditCarModal from './AddEditCarModal';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../Loader';
import {  editCar, getCars, removeCar } from '../../features/cars/carSlice';
// import { current } from '@reduxjs/toolkit';

export default function CarsManagement() {
  
  const {
    cars,
    isLoading,
    isError,
    message,
    currentPage ,
    totalPages ,
    edit
  } = useSelector((state) => state.car);

  const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(currentPage || 1);
  const [size , setSize] = useState(10);

  



  const handleUpdateCar = (car) => {
    setSelectedCar(car);
    setIsAddCarModalOpen(true);
    dispatch(editCar(car))
    

  };
 
  

  const handleDeleteCar = (id) => {
     dispatch(removeCar(id))
  };

  useEffect(() => {
    dispatch(getCars({ page, limit: size }));
  }, [dispatch, page, size]); 
  


  
useEffect(() => {
  if (isError && message) {
    toast.error(message);
  }

  // Only set selectedCar from edit when it's truly set
  if (edit.isEdit && edit.car) {
    setSelectedCar(edit.car);
    setIsAddCarModalOpen(true);
  }
}, [isError, message, edit]); 





  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-800   text-white">
      <div className="max-w-7xl p-6 mx-auto">
        {/* Header + Add Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-white text-transparent mb-6">
            Manage Cars
          </h2>
          <button
            onClick={() => setIsAddCarModalOpen(true)}
            className="inline-flex items-center px-5 py-2 rounded-xl shadow-lg text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 transition"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Car
          </button>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {cars.map((car) => (
            
            
            <div
              key={car._id}
              className="bg-gray-800 rounded-2xl shadow-xl p-4 flex flex-col hover:shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{car.name}</h3>
                <p className="text-sm text-gray-400 mt-1">Fuel: {car.fuelType}</p>
                <p className="text-sm text-gray-400">Rate: ${car.rate}</p>
                <span
                  className={`mt-2 inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    car.available
                      ? 'bg-teal-600 text-white'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {car.available ? 'Available' : 'Rented'}
                </span>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => handleUpdateCar(car)}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteCar(car._id)}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* pagination */}
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



      {/* Modal */}
      <AddEditCarModal
        isOpen={isAddCarModalOpen}
        onClose={() => {
          setIsAddCarModalOpen(false);
          setSelectedCar(null);
          
        }}
        selectedCar={selectedCar}
        edit ={edit}
      />
    </div>
  );
}

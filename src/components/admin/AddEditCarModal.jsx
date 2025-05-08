import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCars, updateCarDetails } from '../../features/cars/carSlice';

export default function AddEditCarModal({ isOpen, onClose, selectedCar , edit    }) {
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    name: '',
    image: '',
    fuelType: '',
    rate: '',
    registration: '',
    category: '',
    seats: '',
    transmission: '',
    description: '',
    mileage: '',
    company: '',
    _id : ""
  });







  useEffect(() => {
  
    
    if (selectedCar) {
      setFormData({
        name: selectedCar.name,
        image: selectedCar.image,
        fuelType: selectedCar.fuelType,
        rate: selectedCar.rate,
        registration: selectedCar.registration,
        category: selectedCar.category,
        seats: selectedCar.seats,
        transmission: selectedCar.transmission,
        description: selectedCar.description,
        mileage: selectedCar.mileage,
        company: selectedCar.company,
        _id: selectedCar._id,
      });
    }
  }, [selectedCar]);

//  console.log(newCar.rate);
 
  
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    !edit.isEdit ? dispatch(addCars(formData)) : dispatch(updateCarDetails(formData))
    onClose();
  };
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, image: selectedFile });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center  justify-center">
      <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-8 w-full max-w-4xl border border-gray-700
  max-h-screen overflow-y-auto md:max-h-none md:overflow-y-visible">
        <h2 className="text-2xl font-bold text-teal-400 mb-6">
          {selectedCar ? 'Edit Car Details' : 'Add New Car'}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Car Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Upload Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full bg-gray-800 text-white file:bg-gradient-to-r file:from-indigo-500 file:to-pink-500 file:text-white file:rounded file:px-4 file:py-1 file:border-0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Rate</label>
              <input
                type="text"
                name="rate"
                value={formData.rate}
                onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mileage</label>
              <input
                type="text"
                name="mileage"
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Registration</label>
              <input
                type="text"
                name="registration"
                value={formData.registration}
                onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Seats</label>
              <input
                type="text"
                name="seats"
                value={formData.seats}
                onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Fuel Type</label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select Fuel Type</option>
                <option value="ev">Electric</option>
                <option value="cng">CNG</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Transmission</label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select Category</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="coupe">Coupe</option>
                <option value="jeep">Jeep</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"

              className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-teal-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              {/* {selectedCar ? 'Update Car' : 'Add Car'} */}
              { selectedCar || edit.isEdit ? "update car" : "Add car"  }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

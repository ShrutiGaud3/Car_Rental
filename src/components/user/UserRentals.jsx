import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentalsForUser } from '../../features/rentals/rentalSlice';
import Loader from '../Loader';
import { Calendar, DollarSign, Car, User2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserRentals = () => {
  const dispatch = useDispatch();
  const { rentals, isLoading, isError, message } = useSelector((state) => state.rentals);

  useEffect(() => {
    dispatch(getRentalsForUser());
  }, [dispatch]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: 'top-center',
      });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-16 bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-300 mb-10">Your Rentals</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((rental) => (
            <div
              key={rental._id}
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <Car className="text-teal-400 w-6 h-6" />
                <h3 className="text-xl font-semibold">Rental ID: {rental._id.slice(-6)}</h3>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Pickup Date:</span>
                <span className="font-semibold text-white">{rental.pickupDate}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Drop-off Date:</span>
                <span className="font-semibold text-white">{rental.dropDate}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <span>Total Bill:</span>
                <span className="font-semibold text-green-400">${rental.totalBill}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <User2 className="w-5 h-5 text-gray-400" />
                <span>User ID:</span>
                <span className="font-mono">{rental.user}</span>
              </div>
              {/* <Link to={`/car/${rental._id}`}>
            <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-2 rounded-md transition duration-200">
                  View Details
             </button>
             </Link> */}

              <div className="text-xs text-gray-500">
                <p>Created: {new Date(rental.createdAt).toLocaleString()}</p>
                <p>Last Updated: {new Date(rental.updatedAt).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRentals;

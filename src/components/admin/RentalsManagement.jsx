import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentalsForAdmin } from '../../features/rentals/rentalSlice';
import { toast } from 'react-toastify';
import Loader from '../Loader';


export default function RentalsManagement() {
  const { rentals, isLoading, isError, message } = useSelector(
    (state) => state.rentals
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRentalsForAdmin());
  }, []);

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: 'top-center',
      });
    }
  }, [isError, message]);

  const formatDate = (date) => {
    if (!date) return 'N/A';
    const d = new Date(date);
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  if (isLoading) {
    return <Loader />;
  }
  

  return (

    <div className="bg-gray-800 min-h-screen text-white font-poppins px-4 py-6">
    <h2 className="text-3xl font-bold mb-6">All Rentals</h2>
  
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {rentals?.users?.map((user) =>
        user?.rentals?.map((rental) => {
          const status = rental?.car?.status || rental?.status || 'Unknown';
          return (
            <div
              key={rental?._id}
              className="bg-gray-700 rounded-xl p-5 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                #{rental?._id?.slice(-6)}
              </h3>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold text-white">User:</span> {user?.name || 'Unknown'}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold text-white">Car:</span> {rental?.car?.name || 'N/A'}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold text-white">Dates:</span>{' '}
                {formatDate(rental?.pickupDate)} - {formatDate(rental?.dropDate)}
              </p>
              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                  status === 'Booked'
                    ? 'bg-rose-600 text-white'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {status}
              </span>
            </div>
          );
        })
      )}
    </div>
  </div>
  
  
  );
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../features/cars/carSlice';
import { getReviewsForAdmin } from '../../features/reviews/reviewSlice';
import { getRentalsForAdmin } from '../../features/rentals/rentalSlice';

const Dashboard = () => {
  const  {cars} = useSelector((state) => state.car);

  const { reviews } = useSelector((state) => state.reviews);
  const { rentals } = useSelector((state) => state.rentals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsForAdmin());
    dispatch(getRentalsForAdmin());
    dispatch(getCars({ page: 1, limit: 10 }));
  }, [dispatch]);

  const totalBillSum = rentals?.users?.reduce((userAcc, user) => {
    const userTotal = user?.rentals?.reduce((rentalAcc, rental) => {
      return rentalAcc + (rental?.totalBill || 0);
    }, 0);
    return userAcc + userTotal;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 py-10">
      <h2 className="text-3xl font-bold text-teal-300 mb-8">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Cars */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total Cars</h3>
          <p className="text-4xl font-bold mt-2">{cars.length}</p>
        </div>

        {/* Active Rentals */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Active Rentals</h3>
          <p className="text-4xl font-bold mt-2">{rentals?.totalRentals || 0}</p>
        </div>

        {/* Reviews */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <p className="text-4xl font-bold mt-2">{reviews?.totalReviews || 0}</p>
        </div>

        {/* Revenue */}
        <div className="bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-4xl font-bold mt-2">${totalBillSum?.toLocaleString() || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getReviewsForAdmin } from '../../features/reviews/reviewSlice';
import Loader from '../Loader';

export default function ReviewsManagement() {
  const { reviews, isLoading, isError, message } = useSelector(
    (state) => state.reviews
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsForAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: 'top-center',
      });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className="p-6 bg-gray-800  min-h-screen text-white font-poppins">
      <h2 className="text-3xl font-bold text-white text-transparent mb-6">
        User Reviews
      </h2>
      <div className="space-y-6 ">
        {reviews?.userWithReviews?.map((user) =>
          user?.reviews?.map((review) => (
            <div
              key={review?._id}
              className="bg-gray-800 p-4 rounded-xl  shadow-lg border border-gray-700"
            >
              <h1 className="font-bold text-2xl text-white mb-3">{user.name}</h1>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-gray-100">
                    {review?.rating} / 5
                  </span>
                </div>
                <span className="text-sm text-gray-400">
                  {new Date(review?.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="mb-4 p-4 bg-gray-700 rounded-md shadow-sm">
                <p className="text-gray-200">{review?.comment}</p>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Car: </span>
                {review.carName}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

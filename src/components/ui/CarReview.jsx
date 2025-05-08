import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom';
import { addReview, getReviewForUser } from '../../features/reviews/reviewSlice';


const CarReview = ({id , reviews}) => {
  console.log(reviews);
  

  const dispatch = useDispatch()
  const [rating , setRating]= useState('')
  const [comment , setComment] = useState("")
 
  const formData = {
    id : id ,
    rating ,
    comment
  }

  const submitReview = async (e)=>{
      e.preventDefault()
       await dispatch(addReview(formData))
       await dispatch(getReviewForUser(id));
     
      
      setRating('')
      setComment('')

  }
   
   useEffect(()=>{
    dispatch(getReviewForUser(id))
   },[id , dispatch])

   

   

  return (
    <section className="bg-gray-900 text-white py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-teal-300 text-center mb-12">Customer Reviews</h2>

    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      
      

      {
       reviews?.length > 0  && reviews?.map((review)=>{
            return (
       <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{review.userName}</h3>
            <span className="text-sm text-emerald-400">{review.rating}/10</span>
            {/* <span class="text-sm text-emerald-400">★★★★★</span> */}
          </div>
          <p className="text-sm text-gray-400">{review.createdAt}</p>
        </div>
        <p className="text-gray-300">
          {review.comment}
        </p>
      </div>
            )
          
        })
      }
      

      
    </div>

    
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Leave a Review</h3>
      <form onSubmit={submitReview} className="space-y-6">
       

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1"></label>
          <select value={rating} onChange={(e)=>setRating(e.target.value)} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
          <option></option>

            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1"></label>
          <textarea value={comment} onChange={(e)=>setComment(e.target.value)} rows="4" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="Write your thoughts..."></textarea>
        </div>

        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-md transition duration-300">
          Submit Review
        </button>
      </form>
    </div>
  </div>
</section>

  
  )
}

export default CarReview
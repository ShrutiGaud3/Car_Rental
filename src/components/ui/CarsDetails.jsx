import React, { useEffect, useState } from 'react';
import {
  Calendar,
  Users,
  Fuel,
  Gauge,
  GaugeCircle,
  Shield,
  CreditCard,
  X,
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCar } from '../../features/cars/carSlice';
import { toast } from 'react-toastify';
import Loader from '../Loader';
import { GetNewRentalForUser} from '../../features/rentals/rentalSlice';
import CarReview from './CarReview';

function CarsDetails() {




  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');


 

  
  const {car , isLoading , isError , isSuccess  , message} = useSelector((state)=>state.car)

  
    const {reviews} = useSelector((state)=> state.reviews)

  // const {rental} = useSelector((state)=> state.rentals)
   
   const {user} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    

  const {_id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(()=>{
   window.scrollTo(0 , 0)
  },[])

  useEffect(()=>{

    dispatch(getCar(_id))


    if(!user){
      navigate("/login")
    }

    if(isError && message){
      toast.error(message , {
        position : "top-center"
      })
    }
  
  },[_id,isError , message])


  if(isLoading){
    return < Loader/>
  }






  const handleBooking = (e) => {

    e.preventDefault()

     let pickup = pickupDate.split("-")
     
     
     let formattedPickup = `${pickup[1]}/${pickup[2]}/${pickup[0]}`
      let dropoff = dropoffDate.split("-")
     let formatteddrop = `${dropoff[1]}/${dropoff[2]}/${dropoff[0]}`

      // console.log(formattedPickup , formatteddrop);




   dispatch(GetNewRentalForUser({
     id : _id ,
     dropDate : formatteddrop,
     pickupDate: formattedPickup ,
   }))

   
   
    
    // if (!pickupDate || !dropoffDate) {
    //   alert('Please select both pickup and drop-off dates');
    //   return;
    // }
    // alert('Booking confirmed! We will contact you shortly.');
    setIsModalOpen(false);
    setPickupDate('');
    setDropoffDate('');
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Car Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[420px] object-cover object-center"
            />
          </div>

          {/* Car Info */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-teal-400">{car.name}</h2>
            <p className="text-gray-400 mb-6 mt-1">{car.company}• Premium Package</p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <Feature icon={<Users size={18} />} label={car.seats} />
              <Feature icon={<Fuel size={18} />} label={car.fuelType} />
              <Feature icon={<Gauge size={18} />} label={car.mileage} />
              <Feature icon={<GaugeCircle size={18} />} label={car.transmission} />
            </div>

            <div className="border-y border-gray-700 py-6 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-white">Rental Price</h3>
              <div className="text-4xl font-bold text-teal-400 flex items-baseline gap-2">
                ${car.rate} <span className="text-base text-gray-400">/ day</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Rental Includes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <Feature icon={<Shield size={18} className="text-green-500" />} label="Insurance Included" />
                <Feature icon={<Calendar size={18} className="text-green-500" />} label="Free Cancellation" />
              </div>
            </div>

            <button
            onClick={() => setIsModalOpen(true)}
                 disabled={car.isBooked}
                className={`w-full transition-all duration-200 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-semibold text-white shadow-lg ${
              car.isBooked ? "bg-gray-600 hover:bg-gray-500 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-500"
            }`}
            >
            <CreditCard size={18} />
              <span>{car.isBooked ? "Not Available" : "Book Now"}</span>
           </button>


            {/* <button
              onClick={() => setIsModalOpen(true)}
              className={car.isBooked ? "w-full bg-gray-600 hover:bg-gray-500 transition-all duration-200 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-semibold text-white shadow-lg " 
                : "w-full bg-teal-600 hover:bg-teal-500 transition-all duration-200 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-semibold text-white shadow-lg"}
            >
              <CreditCard size={18} />
              <span>
                {
                  car.isBooked ? "Not Available" : "Book Now"
                }
                 </span>
            </button> */}
            <p className="text-center text-sm text-gray-500 mt-2">No payment today • Pay at pickup</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-full mx-auto bg-white/5 p-6 rounded-2xl border border-white/10 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-teal-300">About this car</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
           {car.description}
          </p>
        </div>
      </main>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 text-white rounded-xl p-6 max-w-md w-full border border-white/10 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Book Your Rental</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X size={22} />
              </button>
            </div>

            <div className="space-y-4">
           

              <div>
                <label htmlFor="dropoff" className="block text-sm mb-1 text-gray-300">
                  Drop-off Date
                </label>
                <input
                  type="date"
                  id="dropoff"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                 
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="pickup" className="block text-sm mb-1 text-gray-300">
                  Pickup Date
                </label>
                <input
                  type="date"
                  id="pickup"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                onClick={handleBooking}
                className="w-full mt-4 bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-md font-semibold"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      <CarReview id={_id} reviews={reviews}/>
    </div>
  );
}

// Feature item component


const Feature = ({ icon, label }) => (
  <div className="flex items-center space-x-2 text-gray-300">
    {icon}
    <span>{label}</span>
  </div>
);

export default CarsDetails;

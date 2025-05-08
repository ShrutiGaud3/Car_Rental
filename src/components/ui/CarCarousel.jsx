// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const cars = [
//   {
//     id: 1,
//     name: 'Tesla Model S',
//     price: '150',
//     image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
//     specs: {
//       seats: '5',
//       transmission: 'Automatic',
//       type: 'Electric'
//     }
//   },
//   {
//     id: 2,
//     name: 'BMW M4 Competition',
//     price: '200',
//     image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
//     specs: {
//       seats: '4',
//       transmission: 'Automatic',
//       type: 'Petrol'
//     }
//   },
//   {
//     id: 3,
//     name: 'Mercedes-Benz G-Class',
//     price: '250',
//     image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800',
//     specs: {
//       seats: '5',
//       transmission: 'Automatic',
//       type: 'Petrol'
//     }
//   }
// ];

// const CarCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
//   };

//   return (
//     <div className="relative w-full  mx-auto px-4 py-8">
//       <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
//         <h1 className='text-center font-bold text-3xl m-3'>Our Premium Cars</h1>
//         <div 
//           className="flex transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {cars.map((car) => (
//             <div key={car.id} className="w-full flex-shrink-0">
//               <div className="relative aspect-[16/9]">
//                 <img
//                   src={car.image}
//                   alt={car.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
//                 <p className="text-xl text-gray-600 mt-2">${car.price}/day</p>
//                 <div className="mt-4 grid grid-cols-3 gap-4">
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Seats</p>
//                     <p className="font-semibold">{car.specs.seats}</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Transmission</p>
//                     <p className="font-semibold">{car.specs.transmission}</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Type</p>
//                     <p className="font-semibold">{car.specs.type}</p>
//                   </div>
//                 </div>
//                 <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
//                   Book Now
//                 </button>
//               </div> */}
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//           {cars.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full transition-colors ${
//                 index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCarousel;
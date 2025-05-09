
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/ui/Navbar';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDasboard from './pages/AdminDasboard';
import CarsManagement from './components/admin/CarsManagement';
import RentalsManagement from './components/admin/RentalsManagement';
import ReviewsManagement from './components/admin/ReviewsManagement';

import { ToastContainer } from 'react-toastify';
import Dashboard from './components/admin/Dashboard';

import SearchBar from './pages/SearchBar';
import UserRentals from './components/user/UserRentals';
import AboutUs from './components/ui/AboutUs';
import TrendingCars from './components/ui/TrendingCars';
import Cars from './components/ui/Cars';
import Footer from './components/ui/Footer';
import CarsDetails from './components/ui/CarsDetails';




function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
  

   <Routes>
    <Route path='/' element={<Home/>}/>

    <Route path='/admin' element={<AdminDasboard/>}>
    <Route path='' element={<Dashboard/>}/>
        
        <Route path='carsmanagement' element={<CarsManagement/>}/>
        <Route path='rentalsmanagement' element={<RentalsManagement/>}/>
        <Route path='reviewsmanagement' element={<ReviewsManagement/>}/>
    </Route>

    <Route path="/my_rentals" element={<UserRentals />} />
    <Route path="/about_us" element={<AboutUs/>} />

    <Route path="/trending_cars" element={<TrendingCars />} />
    <Route path="/Cars" element={<Cars />} />
    
    <Route path="/car/:_id" element={<CarsDetails/>} />
    <Route path="/search/:query" element={<SearchBar/>} />


    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    
    

   </Routes>
   
   <Footer/>

   <ToastContainer />

    
    </BrowserRouter>
  );
}

export default App;
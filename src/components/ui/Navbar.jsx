import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Car, Menu, X, User, User2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false); // 👈 separate toggle for Cars & About

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
    setMenuOpen(false);
    setPagesMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-teal-400" />
            <span className="text-2xl font-bold text-white">CarRental</span>
          </Link>

          {/* Centered Pages - md and up */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/Cars" className="text-white hover:text-teal-400 transition">Cars</Link>
            <Link to="/about_us" className="text-white hover:text-teal-400 transition">About Us</Link>
          </div>

          {/* User Actions (Login / User Icon / Register) */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to={user.isAdmin ? "/admin" : "/my_rentals"}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition"
                >
                  {user.isAdmin ? "Admin" : "My Rentals"}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition">
               Login
              </Link>
            )}
          </div>

          {/* Mobile Toggles */}
          <div className="md:hidden flex space-x-3">
            {/* Pages Toggle */}
            <button onClick={() => setPagesMenuOpen(!pagesMenuOpen)} className="text-white">
            {pagesMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Auth Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <User2 className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Pages Menu (Mobile Only) */}
        {pagesMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-800 p-4 rounded-lg space-y-2">
            <Link to="/Cars" onClick={() => setPagesMenuOpen(false)} className="block text-white hover:text-teal-400">Cars</Link>
            <Link to="/about_us" onClick={() => setPagesMenuOpen(false)} className="block text-white hover:text-teal-400">About Us</Link>
          </div>
        )}

        {/* Auth Menu (Mobile Only) */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-gray-800 p-4 rounded-lg space-y-3">
            {user ? (
              <>
                <Link
                  to={user.isAdmin ? "/admin" : "/my_rentals"}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white px-4 py-2 rounded bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                >
                  {user.isAdmin ? "Admin" : "My Rentals"}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-white px-4 py-2 rounded bg-red-600 hover:bg-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 text-white px-4 py-2 hover:bg-gray-700 rounded"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

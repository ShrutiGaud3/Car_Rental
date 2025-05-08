import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, CircleDollarSign, MessageSquare, Menu } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden  flex items-center bg-gray-900 text-white p-4">
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="ml-4 font-bold text-xl">ADMIN DASHBOARD</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-20 left-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50 transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-300 ease-in-out
        `}
      >
        <div className="p-6 hidden md:block">
          <h1 className="text-2xl font-bold text-white">ADMIN DASHBOARD</h1>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin"
            onClick={closeSidebar}
            className={`flex items-center p-4 hover:text-white transition-all ${
              isActive('/admin') ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white' : 'text-gray-300'
            }`}
          >
            <Car className="w-5 h-5 mr-3" />
            Dashboard
          </Link>

          <Link
            to="/admin/carsmanagement"
            onClick={closeSidebar}
            className={`flex items-center p-4 hover:text-white transition-all ${
              isActive('/admin/carsmanagement') ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white' : 'text-gray-300'
            }`}
          >
            <Car className="w-5 h-5 mr-3" />
            All Cars
          </Link>

          <Link
            to="/admin/rentalsmanagement"
            onClick={closeSidebar}
            className={`flex items-center p-4 hover:text-white transition-all ${
              isActive('/admin/rentalsmanagement') ? 'bg-gradient-to-r from-teal-700 to-teal-600 text-white' : 'text-gray-300'
            }`}
          >
            <CircleDollarSign className="w-5 h-5 mr-3" />
            All Rentals
          </Link>

          <Link
            to="/admin/reviewsmanagement"
            onClick={closeSidebar}
            className={`flex items-center p-4 hover:text-white transition-all ${
              isActive('/admin/reviewsmanagement') ? 'bg-gradient-to-r from-purple-700 to-purple-600 text-white' : 'text-gray-300'
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            All Reviews
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

import React from 'react';
import { Car, Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold text-white">CarRental</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium car rental services tailored for comfort, safety, and style—wherever the road takes you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Fleet</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>123 Car Street, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <span>1-800-CAR-RENT</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>info@carrental.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-teal-400 transition"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-teal-400 transition"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 CarRental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import bg from '../assets/images/background.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg} // Sample food background image
          alt="Food Background"
          className="object-cover w-full h-[700px] opacity-80"
        />
      </div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <nav className="relative z-10">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-3xl font-bold">
            <a href="#">FoodApp</a>
          </div>

          {/* Menu for large screens */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-secondary transition">Home</a>
            <a href="#" className="text-white hover:text-secondary transition">Menu</a>
            <a href="#" className="text-white hover:text-secondary transition">Order</a>
            <a href="#" className="text-white hover:text-secondary transition">Contact</a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button className="bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
              Sign In
            </button>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-black bg-opacity-75 py-4">
            <a href="#" className="text-white text-lg hover:text-secondary transition">Home</a>
            <a href="#" className="text-white text-lg hover:text-secondary transition">Menu</a>
            <a href="#" className="text-white text-lg hover:text-secondary transition">Order</a>
            <a href="#" className="text-white text-lg hover:text-secondary transition">Contact</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
              Sign In
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

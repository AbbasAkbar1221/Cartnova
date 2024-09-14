import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between h-20 px-5 bg-gray-900">
        {/* Left Section */}
        <div className="flex">
          <img src="./bag.png" alt="logo" className="h-10" />
          <h1 className="pl-4 text-4xl font-semibold text-white">Cartnova</h1>
        </div>

        {/* Center Section */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-10 text-white">
            <li className="hover:text-gray-300">Shop All</li>
            <li className="hover:text-gray-300">Shop Men</li>
            <li className="hover:text-gray-300">Shop Women</li>
            <li className="hover:text-gray-300">Shop Kids</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Signup
          </button>
          <div className="flex items-center">
            <img src="./shopping-cart.png" alt="cart" className="h-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

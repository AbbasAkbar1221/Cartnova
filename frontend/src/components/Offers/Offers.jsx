import React from 'react';
import exclusive from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="hero-container h-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-20 py-16 bg-gradient-to-r from-gray-100 via-gray-500 to-gray-900">
      <div className="flex flex-col lg:-mt-80">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold animate-fadeIn ml-4 lg:ml-8">
          <span className="flex items-center">Exclusive</span>
          <span>only for you</span>
        </h1>

        <h3 className="mt-6 text-xl sm:text-2xl ml-4 lg:ml-9">On the Best sellers</h3>

        <button className="ml-4 lg:ml-9 bg-black text-lg text-white hover:bg-gray-800 font-medium rounded-2xl flex items-center justify-center p-4 sm:p-5 mt-6 transition-transform transform hover:scale-105">
          Check 'em out
        </button>
      </div>

      <img src={exclusive} alt="offer" className="h-auto lg:h-full lg:pl-12 -mt-10 w-full object-cover" />
    </div>
  );
}

export default Offers;

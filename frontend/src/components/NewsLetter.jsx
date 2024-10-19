

import React from 'react';

const NewsLetter = () => {
  return (
    <div className='text-center border-2 border-gray-400 py-14 bg-gray-200 px-4 sm:px-8 lg:px-20'>
      <h1 className='text-2xl sm:text-4xl font-bold'>Get Exclusive Offers In Your Inbox</h1>
      <p className='text-base sm:text-lg text-gray-500 py-4'>
        Subscribe to our newsletter and stay on top of fashion
      </p>
      <form className='flex flex-col sm:flex-row justify-center items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4'>
        <input 
          type="email" 
          placeholder="Enter your email"  
          className='w-full sm:w-auto p-2 pr-16 rounded-lg outline-none border border-gray-400 focus:border-red-700 transition duration-300'
        />
        <button 
          className='w-full sm:w-auto text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;

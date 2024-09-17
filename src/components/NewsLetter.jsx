import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-center border-2 border-gray-400 py-14 bg-gray-200'>
      <h1 className='text-5xl'>Get Exclusive Offers In Your Inbox</h1>
      <p className='text-2xl text-gray-500 py-4'>Subscribe to our newsletter and stay on top of fashion</p>
        <form className='text-lg'>
            <input type="email" placeholder="Enter your email"  className='p-2 pr-16 mr-4 rounded-lg outline-none border border-gray-400'/>
            <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter

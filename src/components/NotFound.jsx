
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-3xl">Page Not Found</p>
      <Link to="/">
      <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-2 w-full mb-6">
      Go to Home
            </button>
        
        </Link>
    </div>
  );
};

export default NotFound;

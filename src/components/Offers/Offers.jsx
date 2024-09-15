// import React from 'react'
// import exclusive from '../Assets/exclusive_image.png'

// const Offers = () => {
//   return (
//     <div className="hero-container min-h-screen flex items-center justify-between px-20 py-16 bg-gradient-to-r from-gray-100 via-gray-500 to-gray-900">




//     <div className="flex flex-col -mt-80">
//       <h1 className="text-7xl font-bold space-x-9 animate-fadeIn">
//         <span className="flex items-center">
          
//           Exclusive{" "}
//         </span>
//         <span>only for you</span>
//       </h1>
//       <h3>On the Best sellers</h3>
//       <button className="ml-8 mr-14 bg-black text-1xl text-white hover:bg-gray-800 font-medium rounded-2xl flex items-center justify-between p-7 mt-14 transition-transform transform hover:scale-105">
//        Check'em out
        
//       </button>
//     </div>
//     <img src={exclusive} alt="offer" className="h-full pl-80 -mt-10 w-full object-cover" />
//   </div>
// );
  
// }

// export default Offers


import React from 'react';
import exclusive from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="hero-container min-h-screen flex items-center justify-between px-20 py-16 bg-gradient-to-r from-gray-100 via-gray-500 to-gray-900">
      <div className="flex flex-col -mt-80">
        <h1 className="text-7xl font-bold animate-fadeIn ml-8">
          <span className="flex items-center">Exclusive</span>
          <span>only for you</span>
        </h1>

        <h3 className="mt-6 text-2xl ml-9">On the Best sellers</h3>

        <button className="ml-9 bg-black text-lg text-white hover:bg-gray-800 font-medium rounded-2xl flex items-center justify-center p-5 mt-6 transition-transform transform hover:scale-105">
          Check 'em out
        </button>
      </div>

      <img src={exclusive} alt="offer" className="h-full pl-80 -mt-10 w-full object-cover" />
    </div>
  );
}

export default Offers;

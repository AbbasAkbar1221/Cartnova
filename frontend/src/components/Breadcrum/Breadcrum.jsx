// import React from 'react'
// import arrow from '../Assets/breadcrum/breadcrum_arrow.png'
// import { Link } from 'react-router-dom'


// const Breadcrum = ({product}) => {
//   return (
//     <>
//     <div className='flex pl-5 py-4 mb-10 bg-gray-200 w-full'>
//       <Link to='/' className='text-lg text-blue-900 font-bold mr-2'>HOME</Link>
//       <img src={arrow} alt="arrow" />
//         <Link to={`/${product.category.toLowerCase()}`} className='text-lg text-blue-900 font-bold mx-2'>SHOP {product.category.toUpperCase()}</Link>
//         <img src={arrow} alt="arrow" />
//         <span className='mx-2  text-gray-600'>{product.name}</span>
//     </div>
    
//     </>
//   )
// }

// export default Breadcrum


import React from 'react';
import arrow from '../Assets/breadcrum/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrum = ({ product }) => {
  return (
    <div className="flex pl-5 py-4 mb-10 bg-gray-200 w-full flex-wrap">
      <Link to="/" className="text-lg text-blue-900 font-bold mr-2 whitespace-nowrap">
        HOME
      </Link>
      <img src={arrow} alt="arrow" className="my-auto" />
      <Link
        to={`/${product.category.toLowerCase()}`}
        className="text-lg text-blue-900 font-bold mx-2 whitespace-nowrap"
      >
        SHOP {product.category.toUpperCase()}
      </Link>
      <img src={arrow} alt="arrow" className="my-auto" />
      <span className="mx-2 text-gray-600 whitespace-nowrap">{product.name}</span>
    </div>
  );
};

export default Breadcrum;

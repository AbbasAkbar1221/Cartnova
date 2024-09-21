import React from 'react'
import arrow from '../Assets/breadcrum/breadcrum_arrow.png'
import { Link } from 'react-router-dom'
import ProductDisplay from '../ProductDisplay.jsx/ProductDisplay'

const Breadcrum = ({product}) => {
  return (
    <>
    <div className='flex pl-5 py-4 mb-10 bg-gray-200 w-full'>
      <Link to='/' className='text-lg text-blue-900 font-bold mr-2'>HOME</Link>
      <img src={arrow} alt="arrow" />
        <Link to={`/${product.category.toLowerCase()}`} className='text-lg text-blue-900 font-bold mx-2'>SHOP {product.category.toUpperCase()}</Link>
        <img src={arrow} alt="arrow" />
        <span className='mx-2  text-gray-600'>{product.name}</span>
    </div>
    <ProductDisplay product={product} className=''/>
    </>
  )
}

export default Breadcrum

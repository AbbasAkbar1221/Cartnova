import React from 'react'
import arrow from '../Assets/breadcrum/breadcrum_arrow.png'
import { Link } from 'react-router-dom'

const Breadcrum = ({product}) => {
  return (
    <div className='flex ml-5'>
      <Link to='/' className='text-lg text-blue-900 font-bold mr-2'>HOME</Link>
      <img src={arrow} alt="arrow" />
        <Link to={`/${product.category.toLowerCase()}`} className='text-lg text-blue-900 font-bold mx-2'>SHOP {product.category.toUpperCase()}</Link>
        <img src={arrow} alt="arrow" />
        <span className='mx-2  text-gray-600'>{product.name}</span>
        

    </div>
  )
}

export default Breadcrum

import React from 'react'
import fullstar from '../Assets/stars/star.png'
import outlineStar from '../Assets/stars/star (1).png'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'

const ProductDisplay = ({product}) => {
  const {addProductToCart} = useContext(ShopContext);
  
  return (
    <div className='flex'>
        <div className='mx-6'>
        <img src={product.image} alt="not found" className='h-20 w-18 mb-4 rounded-lg' />
        <img src={product.image} alt="not found" className='h-20 w-18 mb-4 rounded-lg' />
        <img src={product.image} alt="not found" className='h-20 w-18 mb-4 rounded-lg'/>
        <img src={product.image} alt="not found" className='h-20 w-18 mb-4 rounded-lg'/>
        </div>
        <div>
            <img src={product.image} alt="not found"className='mx-8 rounded-xl' />
        </div>
      <div>
        <h1 className='text-2xl font-semibold'>{product.name}</h1>
        <div className='flex h-6 my-6'>
          <img src={fullstar} alt="not found" className='mr-2' />
          <img src={fullstar} alt="not found" className='mr-2' />
          <img src={fullstar} alt="not found" className='mr-2' />
          <img src={fullstar} alt="not found" className='mr-2' />
          <img src={outlineStar} alt="not found" />
        </div>
        <div className='flex'>
          <h1 className='line-through text-xl text-gray-400 '> ₹{product.old_cost}</h1>
          <h1 className='text-2xl text-blue-900 ml-3 font-semibold'> ₹{product.new_cost}</h1>
        </div>
        <div>
          <p className='my-6 text-gray-600 text-lg'>{product.description}</p>
        </div>
        <div>
          <h1 className='text-3xl font-semibold my-6'>Select Size</h1>
        </div>
        <div className='flex'>
          <button className='border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2'>S</button>
          <button className='border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2'>M</button>
          <button className='border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2'>L</button>
          <button className='border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2'>XL</button>
          <button className='border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2'>XXL</button>
        </div>
        <div className='mt-3 mb-5'>
          <button onClick={addProductToCart} className=' text-white bg-blue-900 hover:bg-blue-950 p-4 rounded-lg my-6 w-56'>Add to cart</button>
        </div>
        <div className='flex mb-6'>
          <h1 className='text-xl font-semibold mr-1.5'>Category :</h1>
          <h1 className='text-xl text-gray-400'>{product.category}</h1>
        </div>
        <div className='flex mb-6'>
          <h1 className='text-xl font-semibold mr-1.5'>Brand :</h1>
          <h1 className='text-xl text-gray-400'>Not Available</h1>
        </div>
        <div className='flex mb-6'>
          <h1 className='text-xl font-semibold mr-1.5'>Product Code :</h1>
          <h1 className='text-xl text-gray-400'>{product.id}</h1>
        </div>
        <div className='flex mb-6'>
          <h1 className='text-xl font-semibold mr-1.5'>Availability :</h1>
          <h1 className='text-xl text-gray-400'>Out of Stock</h1>
        </div>
        <div className='flex mb-16'>
          <h1 className='text-xl font-semibold mr-1.5'>Tags :</h1>
          <h1 className='text-xl text-gray-400'>Not Available</h1>
        </div>
      </div>

    </div>
  )
}

export default ProductDisplay

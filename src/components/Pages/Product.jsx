import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Product = () => {
  const {id} = useParams();
  const products = useContext(ShopContext)
  const product = products.find(product => product.id === Number(id));
  return (
    <>
      <h1 className='text-3xl mb-5'>Product id: {id}</h1>
      <Breadcrum product={product}/> 
    </>
  )
}

export default Product


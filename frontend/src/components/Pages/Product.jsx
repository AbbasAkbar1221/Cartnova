import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductDisplay from '../ProductDisplay.jsx/ProductDisplay'
import DescriptionBox from '../descriptionBox/DescriptionBox'
import RelatedProduct from '../relatedProduct/RelatedProduct'

const Product = () => {
  const {id} = useParams();  
  const {all_products} = useContext(ShopContext)

  if (!all_products.length) {
    return <h2>Loading products...</h2>;
  }
  const product = all_products.find(product => product.id === Number(id));

  
  
  return (
    <>
      <Breadcrum product={product}/> 
      <ProductDisplay product={product} className=''/>
      <DescriptionBox/>
      <RelatedProduct category={product.category} id={product.id}/>
    </>
  )
}

export default Product


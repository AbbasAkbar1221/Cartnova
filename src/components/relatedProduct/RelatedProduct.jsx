import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Item/Item'

const getRelatedproduct=(category, products, id)=>{
    const category_products = products.filter((product)=>{
        return product.category === category;
    })

    const related_products = [];
    const random_products_ids = [];

    while(related_products.length < 4 && category_products.length > 0){
        const random_product = category_products[Math.floor(Math.random() * category_products.length)];
        if(random_product && !random_products_ids.includes(random_product.id) && !random_products_ids.includes(id)){
            related_products.push(random_product)
            random_products_ids.push(random_product.id);
        }
    }
    return related_products;

}

const RelatedProduct = ({category, id}) => {
    const products = useContext(ShopContext);
    const related_products = getRelatedproduct(category, products, id);
  return (
    <div>
    <div className='mb-10'>
      <h1 className='text-4xl my-20 text-center font-semibold'>Related Products</h1>
      <hr className='border-4 border-blue-800 w-20 mx-auto -mt-12' />
    </div>
    <div className='flex gap-4 mb-10'>
        {related_products.map((product)=>{
            return <Item key={product.id} ItemObj={product} />
        })}
    </div>
    </div>
  )
}

export default RelatedProduct

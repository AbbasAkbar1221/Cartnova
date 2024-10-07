import React from 'react';
import Item from '../Item/ItemMen';
import { useState, useEffect } from 'react';

const Trending = () => {
  let [data_product_trending_kids, setData_product] = useState([]);
  useEffect(() => {
    fetch("https://cartnova.onrender.com/trendingkid")
    // fetch("http://localhost:4000/trendingkid")
      .then((response) => response.json())
      .then((data) => 
        setData_product(data));
    },[]); 

  return (
    <div className='text-center my-10 px-4'>
      <h1 className='text-5xl font-bold mb-10'>Trending in Kids</h1>
      <hr className='my-6 border-gray-300' />
      <div className="trending-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data_product_trending_kids.map((item, index) => (
            <Item key={index} ItemObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

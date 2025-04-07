import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Trending = () => {
  let [data_product_trending_women, setData_product] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/product/trendingwomen`)
      .then((response) => response.json())
      .then((data) => 
        setData_product(data));
    },[]); 

  return (
    <div className='text-center my-10 px-4'>
      <h1 className='text-5xl font-bold mb-10'>Trending in Women</h1>
      <hr className='my-6 border-gray-300' />
      <div className="trending-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data_product_trending_women.map((item, index) => (
            <Item key={index} ItemObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

import React from 'react';
import Item from '../Item/ItemCollection';
import  new_collections  from '../Assets/new_collection';

const Trending = () => {
  return (
    <div className='text-center my-10 px-4'>
      <h1 className='text-5xl font-bold mb-6'>New Collection</h1>
      <hr className='my-6 border-gray-300' />
      <div className="trending-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {new_collections.map((item, index) => (
            <Item key={index} ItemObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

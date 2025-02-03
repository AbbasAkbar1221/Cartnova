import React, { useEffect } from 'react';
import Item from '../Item/ItemCollection';
import { useState } from 'react';


const NewCollection = () => {
    const [new_collections, setNewCollections] = useState([]);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;
        fetch(`${API_URL}/product/newcollection`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched new collections:", data); // Check the fetched data in the browser console
                setNewCollections(data);
            })
            .catch((error) => {
                console.error("Error fetching new collections:", error);
            });
    }, []);
  return (
    <div className='text-center my-10 px-4'>
      <h1 className='text-5xl font-bold mb-10'>New Collection</h1>
      <hr className='my-6 border-gray-300' />
      <div className="trending-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {new_collections.map((item, index) => (
            <Item key={index} ItemObj={item} />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;

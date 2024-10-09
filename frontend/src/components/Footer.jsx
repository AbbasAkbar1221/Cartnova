
import React from 'react';
import instaIcon from './Assets/insta.png';
import pintersestIcon from './Assets/pinterest.png';
import whatsappIcon from './Assets/whatsapp.png';

const Footer = () => {
  return (
    <div className='bg-black text-white pt-4'>
      <div className='flex flex-col items-center'>
        <img src="./bag.png" alt="bag" className='h-8 pr-4 mb-2' />
        <p className='text-lg'>Cartnova</p>
      </div>

      <ul className='flex flex-wrap justify-center space-x-4 px-4 mt-4 text-gray-500'>
        <li className='hover:text-white cursor-pointer'>Company</li>
        <li className='hover:text-white cursor-pointer'>Products</li>
        <li className='hover:text-white cursor-pointer'>Offices</li>
        <li className='hover:text-white cursor-pointer'>About</li>
        <li className='hover:text-white cursor-pointer'>Contact</li>
      </ul>

      <div className="flex justify-center h-8 space-x-4 my-4">
        <img src={instaIcon} alt="instagram" className='h-6 w-6 sm:h-8 sm:w-8' />
        <img src={pintersestIcon} alt="pinterest" className='h-6 w-6 sm:h-8 sm:w-8' />
        <img src={whatsappIcon} alt="whatsapp" className='h-6 w-6 sm:h-8 sm:w-8' />
      </div>

      <hr className='border-gray-700' />
      <div className="flex justify-center my-4 text-gray-500">
        <p className='pb-2'>&copy; 2024 Cartnova. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

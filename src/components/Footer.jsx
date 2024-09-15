import React from 'react'
import instaIcon from './Assets/insta.png'
import pintersestIcon from './Assets/pinterest.png'
import whatsappIcon from './Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='bg-black text-white pt-4'>
      <div className='flex justify-center'>
        <img src="./bag.png" alt="bag" className='h-8 pr-4' />
        <p>Cartnova</p>
      </div>
      <ul className='flex justify-center space-x-4 px-4 mt-4 text-gray-500 '>
        <li className='hover:text-white'>Company</li>
        <li className='hover:text-white'>Products</li>
        <li className='hover:text-white'>Offices</li>
        <li className='hover:text-white'>About</li>
        <li className='hover:text-white'>Contact</li>
      </ul>
      <div className="images flex justify-center h-8 space-x-4 my-4">
        <img src={instaIcon} alt="instagram" />
        <img src={pintersestIcon} alt="" />
        <img src={whatsappIcon} alt="" />
      </div>
      <hr />
        <div className="flex justify-center my-4 text-gray-500">
            <p className='pb-4'>&copy; 2024 Cartnova. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer

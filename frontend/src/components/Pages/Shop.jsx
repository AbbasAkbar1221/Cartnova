import React from 'react'
import Hero from '../Hero/Hero'
import Trending from '../Trending/Trending'
import TrendingMen from '../Trending/TrendingMen'
import TrendingKids from '../Trending/TrendingKids'
import Offers from '../Offers/Offers'
import NewsLetter from '../NewsLetter'
import NewCollection from '../NewCollection/NewCollection'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Trending/>
      <TrendingMen/>
      <TrendingKids/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop

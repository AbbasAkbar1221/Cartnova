import React from 'react'
import Hero from '../Hero/Hero'
import Trending from '../Trending/Trending'
import TrendingMen from '../Trending/TrendingMen'
import TrendingKids from '../Trending/TrendingKids'
import Offers from '../Offers/Offers'
import TrendingCollection from '../Trending/TrendingCollection'
import NewsLetter from '../NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Trending/>
      <TrendingMen/>
      <TrendingKids/>
      <Offers/>
      <TrendingCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop

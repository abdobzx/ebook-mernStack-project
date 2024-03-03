import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'


const Home = () => {
  return (
    <><Banner />
    <BestSellerBooks />
    <FavBook/>
    <PromoBanner/>
    <OtherBooks></OtherBooks>
    <Review></Review>

    </>
  )
}

export default Home




import React from 'react'
import LatestCollection from '../Components/LatestCollection'
import Bestseller from '../Components/Bestseller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'
import Hero2 from '../Components/Hero2'
import Description from '../Components/Description'
import Assistance from '../Components/Assistance'

const Home = () => {
  return (
    <>
      <Hero2/>
      <Bestseller/>
      <Description/>
      <LatestCollection/>
      <Assistance/>
      <OurPolicy/>
      <NewsLetterBox/>
    </>
  )
}

export default Home
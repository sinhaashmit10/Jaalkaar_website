import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 sm: px-[5vw] md: px-[7vw] lg: px-[8vw]'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>At JaalKaar, we celebrate the art of handcrafted heritage. Our collections blend traditional craftsmanship with modern elegance, bringing you unique pieces made with passion and precision. Every item tells a story of artistry and culture, crafted by skilled artisans. Discover timeless beauty and support the legacy of handmade art with us.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-9304192707</li>
                    <li>care.jaalkaar@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-row justify-center mb-2 gap-3'>
            <img className='w-7' src={assets.facebook_logo} alt="" />
            <img className='w-8' src={assets.instagram_logo} alt="" />
            <img className='w-10' src={assets.youtube_logo} alt="" />
            <img className='w-9' src={assets.linkedin_logo} alt="" />
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-600'>Copyright 2024 @ JaalKaar - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
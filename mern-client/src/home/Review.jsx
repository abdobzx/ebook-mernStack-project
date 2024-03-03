import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';
import {FaStar} from "react-icons/fa6"
import prof from "../assets/p2.jpg"
import prof1 from "../assets/p3.jpg"
import prof2 from "../assets/p4.jpg"
import prof3 from "../assets/p5.jpg"
import prof4 from "../assets/profile1.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gab-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Thrilled with my purchase! test bank book from Bookso exceeded my expectations. Insightful content, well-presented, and an overall excellent experience. Highly recommended!</p>
                         <Avatar img={prof} alt="avatar of Jese" rounded className='w-10 mb-4'/> 
                         <h5 className='text-lg font-medium'>Ethan Rodriguez</h5>
                         <p className='text-base'>Event Experience Coordinator</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gab-2'>
                    <FaStar/>
                    <FaStar/>
                    
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>"'Culinary Creativity' by Bookso is a feast for the senses! The recipes are innovative, and the writing makes it a delightful experience. Highly recommend for any food lover out there!"</p>
                         <Avatar img={prof1} alt="avatar of Jese" rounded className='w-10 mb-4'/> 
                         <h5 className='text-lg font-medium'>Marko faneli</h5>
                         <p className='text-base'>CEO, 4solution Company</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gab-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>"Code Crafters' from Bookso is a must-read. Clear explanations, practical tips – it's become my go-to reference. Well done, Bookso, for delivering quality content for tech enthusiasts!"</p>
                         <Avatar img={prof2} alt="avatar of Jese" rounded className='w-10 mb-4'/> 
                         <h5 className='text-lg font-medium'>Jackson Barnes</h5>
                         <p className='text-base'>Digital Marketer</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gab-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>"Just finished 'Adventure Awaits' from Bookso. Loved every page! The travel tales were captivating, and the vivid descriptions transported me. Kudos to the team for such a delightful journey!"</p>
                         <Avatar img={prof3} alt="avatar of Jese" rounded className='w-10 mb-4'/> 
                         <h5 className='text-lg font-medium'>Marcus</h5>
                         <p className='text-base'>Clinical Data Scientist</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gab-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>"Bookso delivered again! 'Mastering Mindfulness' is a gem. The insights are practical, and the writing is captivating. Thank you for another enriching read!"</p>
                         <Avatar img={prof4} alt="avatar of Jese" rounded className='w-10 mb-4'/> 
                         <h5 className='text-lg font-medium'>Ethan</h5>
                         <p className='text-base'>Virtual Reality Developer</p>

                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    
        </div>
    </div>
    
  )
}

export default Review
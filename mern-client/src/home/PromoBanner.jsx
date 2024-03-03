import React from 'react';
import bookPic from "../assets/R2.png";
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
          <h2 className='text-3xl font-bold mb-4 leading-snug'>2024 National Book Awards for Fiction Shortlist</h2>
          <Link to="/shop">
            <button className='bg-blue-700 text-white font-semibold px-3 py-3 rounded hover:bg-black transition-all duration-300'>
               Get Promo   
            </button>
          </Link>
        </div>
        <div>
          <img src={bookPic} alt="Book" className='w-96' />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

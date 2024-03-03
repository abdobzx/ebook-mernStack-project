import React from 'react';
import FavBookImage from "../assets/R.jpg";
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-15'>
      <div className='md:w-1/2'>
        <img src={FavBookImage} alt="" className='rounded md:w-10/12' />
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-4xl font-bold my-5 md:w-3/4 leading-snug'>
          Find Your Favorite
          <span className='text-blue-700'> Book Here!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
          A "test bank" typically refers to
          a collection of questions and answers designed for use by instructors in creating
          exams and quizzes for a particular textbook or course. These questions may vary in format,
          including multiple-choice, true/false, and short answer questions. The purpose of a test bank
          is to provide instructors with a resource to assess students' understanding of the material
          and to streamline the process of exam creation.
        </p>
        <div className='md:w-3/4 my-14 md:mb-8'>
          <div className='flex flex-col sm:flex-row justify-between gap-6'>
            <div>
              <h3 className='text-3xl font-bold '>800+</h3>
              <p className='text-base'>Book Listing</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold '>550+</h3>
              <p className='text-base'>Register Users</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold '>1200+</h3>
              <p className='text-base'>PDF Downloads</p>
            </div>
          </div>
          <Link to="/shop" className='mt-8 block'>
            <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
              hover:bg-black transition-all 
              duration-300'>Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavBook;

import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Payo from './Pay';

const SingleBook = () => {
  const { _id, bookTitle, imageUrl, bookDescription, category, authorName } = useLoaderData();

  const handlePaymentSuccess = (details) => {
    console.log('Payment successful:', details);
  };

  const handlePaymentCancel = () => {
    console.log('Payment canceled');
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-20 px-4 lg:px-24 flex'>
      <div className='w-1/2 pr-8'>
        <img src={imageUrl} alt={bookTitle} className='h-96 rounded-lg shadow-md' />
      </div>
      <div className='w-1/2'>
        <h2 className='text-2xl font-bold mb-2'>{bookTitle}</h2>
        <p className='text-gray-700 mb-2'>{bookDescription}</p>
        <p className='text-sm text-gray-500 mb-2'>
          <span className='font-semibold'>Category:</span> {category}
        </p>
        <p className='text-sm text-gray-500 mb-4'>
          <span className='font-semibold'>Author:</span> {authorName}
        </p>
        <div>
          <Payo />
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
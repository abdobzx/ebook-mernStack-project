import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const SingleBook = () => {
  const { bookTitle, imageUrl, bookDescription, category, authorName, bookPdfUrl } = useLoaderData();
  const [showDownloadLink, setShowDownloadLink] = useState(false); // State to control the display of the download link

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle payment success
  const handlePaymentSuccess = (details, data) => {
    // Display a thank you message
    alert('Thank you for your purchase! You can now download the book.');
    // Show the download link
    setShowDownloadLink(true);
    console.log(details, data); // Log payment details for debugging/verification
  };

  return (
    <div className='mt-20 px-4 lg:px-24 flex flex-col lg:flex-row'>
      <div className='lg:w-1/2 pr-8 mb-4 lg:mb-0'>
        <img src={imageUrl} alt={bookTitle} className='h-110 rounded-lg shadow-md' />
        <div className="mt-4 flex justify-between items-center">
          {showDownloadLink && (
            <button onClick={() => window.open(bookPdfUrl, "_blank")} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' style={{ minWidth: "200px", height: "48px" }}>
              Download Book
            </button>
          )}
          <span className="text-2xl font-bold">Price : 10 $</span>
        </div>
      </div>
      <div className='lg:w-1/2'>
        <h2 className='text-2xl font-bold mb-2'>{bookTitle}</h2>
        <p className='text-gray-700 mb-2'>{bookDescription}</p>
        <div className='text-sm text-gray-500 mb-2'>
          <span className='font-semibold'>Category:</span> {category}
        </div>
        <div className='text-sm text-gray-500 mb-4'>
          <span className='font-semibold'>Author:</span> {authorName}
        </div>
        
        <PayPalScriptProvider options={{ "client-id": "AXxXX7IrsFPGLOO6gSr583U0ix4tIetDLg0P7xEyM9lr1GfB2YASfosa__4ba891Ihlh1KmCbC1IL0YS" }}>
          <PayPalButtons 
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: "10", // Charge $10
                  },
                }],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(details => {
                handlePaymentSuccess(details, data);
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default SingleBook;

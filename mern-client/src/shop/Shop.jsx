import { Card } from 'flowbite-react';
import React ,{useEffect, useState} from 'react'

const Shop = () => {
  const [books ,setBooks] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));

  },[])
  return (
    <div className='mt-28 px-4 '>
      <h2 className='text-5xl font-bold text-center '>All Books are Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(books =>   <Card
           >
            <img src={books.imageUrl}  alt="" className='h-80'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {books.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                   {books.authorName}
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
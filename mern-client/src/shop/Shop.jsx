

import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://ebook.sytes.net:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className='mt-28 px-4 '>
      <h2 className='text-5xl font-bold text-center '>All Books are Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map((book) => (
          <Card key={book._id}>
            <img src={book.imageUrl} alt="" className='h-80' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.authorName}
            </p>
            <Link to={`/book/${book._id}`}>
            <button className='bg-blue-700 font-semibold text-white py-3 rounded-lg' style={{ width: '100%', margin: 'auto' }}>
  Buy Now
</button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

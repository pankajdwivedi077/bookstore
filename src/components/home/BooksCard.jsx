import React from 'react';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;

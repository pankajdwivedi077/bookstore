import React from 'react';

const BooksTable = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <table className='w-full border-separate border-spacing-2'>
      {/* Rest of your table rendering code */}
    </table>
  );
};

export default BooksTable;

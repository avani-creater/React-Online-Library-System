import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  // Check if books data is provided; if not, show a message
  if (!books || books.length === 0) {
    return <p className="text-gray-500">No books available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {books.map((book) => (
        <div key={book.id} className="p-4 border rounded shadow-md bg-white">
          <h2 className="font-bold text-lg mb-2 text-teal-600">{book.title}</h2>
          <p className="text-sm text-orange-700 mb-2">by {book.author}</p>
          <Link
            to={`/books/${book.id}`}
            className=" hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;

import React from 'react';

const BookDetails = ({ book }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-2xl font-bold">{book.title}</h2>
    <p className="text-lg">by {book.author}</p>
    <p>{book.description}</p>
    <p>Rating: {book.rating}</p>
  </div>
);

export default BookDetails;

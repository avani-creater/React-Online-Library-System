import React, { useState } from 'react';
import BookList from '../components/BookList';

const sampleBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
];

const BrowseBooks = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);

  // Filter books based on search query by title or author
  const filteredBooks = sampleBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-red-900 font-serif">Browse Books</h1>
      <input
        type="text"
        placeholder="Search books by title or author"
        value={search}
        onChange={handleSearch}
        className="border p-2 rounded mb-4 w-full"
      />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default BrowseBooks;

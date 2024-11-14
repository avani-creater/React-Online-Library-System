import React from 'react';
import BookList from '../components/BookList';

const samplePopularBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

const Home = () => (
  <div className="p-6 bg-black">
    <h1 className="text-3xl font-bold text-cyan-600 font-serif">Welcome to the Online Library</h1>
    <h2 className="text-xl mt-4 text-red-700 font-extrabold font-serif italic">Popular Books</h2>
    <BookList books={samplePopularBooks} />
  </div>
);

export default Home;

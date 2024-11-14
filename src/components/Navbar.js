import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-yellow-600 p-4 text-lime-200 font-semibold">
    <ul className="flex space-x-4">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/browse">Browse Books</Link></li>
      <li><Link to="/add">Add Book</Link></li>
    </ul>
  </nav>
);

export default Navbar;

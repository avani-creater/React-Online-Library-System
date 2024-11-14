import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    navigate('/browse');
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="input" />
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} className="input" />
        <button type="submit" className="btn text-slate-200 bg-green-500 p-1 w-24 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

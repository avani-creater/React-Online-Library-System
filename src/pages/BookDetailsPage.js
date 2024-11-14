import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BookDetails from '../components/BookDetails';


const sampleBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel set in the Jazz Age, exploring themes of wealth and society.', rating: 4.4 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A story of racial injustice in the Deep South, as seen through the eyes of a young girl.', rating: 4.9 },
  { id: 3, title: '1984', author: 'George Orwell', description: 'A dystopian novel about surveillance and totalitarianism.', rating: 4.6 },

];

const BookDetailsPage = () => {
  const { id } = useParams();

  // Find the book with the matching ID
  const book = sampleBooks.find((b) => b.id === parseInt(id, 10));

  // Check if the book exists; if not, display a message
  if (!book) {
    return <p className="p-6 text-red-500">Book not found</p>;
  }

  return (
    <div className="p-6">
      <BookDetails book={book} />
      <Link to="/browse" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetailsPage;

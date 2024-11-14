import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl">Page Not Found</h1>
    <Link to="/" className="text-blue-500">Go Back to Home</Link>
  </div>
);

export default NotFoundPage;

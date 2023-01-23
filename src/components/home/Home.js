import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Library Catalog</h1>
      <h2>
        Welcome to Tylers library! Check out my excellent selection of reading material within our{' '}
        <Link to="/books">catalog</Link>
      </h2>
    </div>
  );
}

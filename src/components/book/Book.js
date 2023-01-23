import { Link } from 'react-router-dom';
import Author from '../author/Author';
import BookDetail from './BookDetail.js';
import './Book.css';

function Book({
  book: {
    title,
    total_pages: totalPages,
    rating,
    isbn,
    published_date: publishedDate,
    authors,
    book_id,
  },
  showDetail = false,
}) {
  return (
    <article className="book">
      <h3>
        <Link to={`/books/${book_id}`}>{title}</Link>
      </h3>
      <address>
        {authors.map((author) => (
          <Author key={author.author_id} author={author} />
        ))}
      </address>
      {showDetail && (
        <>
          <p>Rating: {rating}</p>
          <p>ISBN: {isbn}</p>
          <p>Published {publishedDate}</p>
          <p>{totalPages} pages</p>
          <p>
            <Link to="/books">Return to Catalog</Link>
          </p>
        </>
      )}
    </article>
  );
}

export default Book;

import { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      progress: '60%',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      progress: '76%',
    },
  ]);

  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    return books;
  };

  return (
    <section>
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            progress={book.progress}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import AddForm from './AddForm';
import { useSelector } from 'react-redux';

const BookList = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { books } = useSelector((state)=>state.books)

  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    return books;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      progress: '0%',
    };
    setBooks([...books, newBook]);

    setTitle('');
    setAuthor('');
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
      <AddForm
        handleAdd={handleAddBook}
        handleTitle={handleTitleChange}
        handleAuthor={handleAuthorChange}
        title={title}
        author={author}
      />
    </section>
  );
};

export default BookList;

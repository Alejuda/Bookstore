import { useSelector } from 'react-redux';
import Book from './Book';
import AddForm from './AddForm';

const BookList = () => {
  const books = useSelector((store) => store.books);

  return (
    <section>
      <div className="books-container">
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Book key={book.itemId} {...book} />
        ))}
      </div>
      <AddForm />
    </section>
  );
};

export default BookList;

import Book from './Book';
import AddForm from './AddForm';
import { useSelector } from "react-redux";


const BookList = () => {
  const books = useSelector((store) => store.books);

  return (
    <section>
      <div className="books-container">
        {books.map((book) => (
          <Book key={book.item_id} {...book} />
        ))}
      </div>
      <AddForm />
    </section>
  );
};

export default BookList;

import books from "../../data/books.json";
import BooksItem from "./BookItem";

const BooksList = () => {
  console.log(books);
  return (
    <ul>
      {books.map((book) => (
        <BooksItem
          key={`${book.title} ${book.author}`}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;

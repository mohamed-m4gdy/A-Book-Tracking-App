import React from "react";
import Book from "./Book";

const BookList = ({ books, title, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, idx) => (
            <li key={idx}>
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookList;

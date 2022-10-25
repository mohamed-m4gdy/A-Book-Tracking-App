import React from "react";
import BookList from "./BookList";

const Shelves = ({ books, updateShelf }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books-content">
      <div>
        <BookList
          title="Currently Reading"
          books={currentlyReading}
          updateShelf={updateShelf}
        />

        <BookList
          title="want To Read"
          books={wantToRead}
          updateShelf={updateShelf}
        />

        <BookList title="read" books={read} updateShelf={updateShelf} />
      </div>
    </div>
  );
};

export default Shelves;

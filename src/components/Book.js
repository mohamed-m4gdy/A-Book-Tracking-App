import React from "react";
import UpdateShelf from "./UpdateShelf";

const Book = ({ book, updateShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <UpdateShelf select={book} update={updateShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.publisher}</div>
    </div>
  );
};

export default Book;

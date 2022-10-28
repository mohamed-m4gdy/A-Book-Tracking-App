import React from "react";
import UpdateShelf from './UpdateShelf'

const Book = ({ getAll }) => {
  return (
    <ol className="books-grid">
      {getAll.map((e) => (
        <li key={e.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${e.imageLinks.thumbnail})`,
                }}
              ></div>
                <UpdateShelf />
            </div>
            <div className="book-title">{e.title}</div>
            <div className="book-authors">{e.publisher}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Book;

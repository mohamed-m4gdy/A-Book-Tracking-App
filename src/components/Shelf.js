import React from "react";
import Book from "./Book";

const Shelf = ({ getAll, title, update }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {getAll.map((e) => (
              <li key={e.id}>
                <Book getAll={e} update={update} />
              </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Shelf;

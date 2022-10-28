import React from "react";
import Book from "./Book";

const Shelf = ({ getAll, title }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <Book getAll={getAll} />
        </div>
      </div>
    </div>
  );
};

export default Shelf;

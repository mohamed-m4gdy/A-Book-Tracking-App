import React from "react";
import UpdateShelf from './UpdateShelf'

const Book = ({ getAll, update }) => {
  return (
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${getAll.imageLinks.thumbnail})`,
                }}
              ></div>
                <UpdateShelf getAll={getAll} update={update} />
            </div>
            <div className="book-title">{getAll.title}</div>
            <div className="book-authors">{getAll.publisher}</div>
          </div>
  );
};

export default Book;

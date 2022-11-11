import React from "react";
import UpdateShelf from './UpdateShelf'

const Book = ({ getAll, update }) => {
  let thumbnail = ""
  if (getAll.imageLinks) {
      thumbnail = getAll.imageLinks.thumbnail
  } else {
      thumbnail = ""
  }
  return (
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${thumbnail})`,
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

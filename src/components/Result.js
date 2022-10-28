import React from "react";
import UpdateShelf from './UpdateShelf'

const Result = ({ data, err, update, getAll }) => {
  return (
    <div>
    <div>{err.error}</div>
      <ol className="books-grid">
        {data.map((e) => (
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
                <UpdateShelf update={update} getAll={getAll} />
              </div>
              <div className="book-title">{e.title}</div>
              <div className="book-authors">{e.publisher}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Result;

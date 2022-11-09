import React from 'react';
import Book from './Book'
import { Link } from "react-router-dom";

const Search = ({ query, setQuery, merge, update, getAll }) => {
    return (

        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {merge.map((e) => (
                  <li key={e.id}>
                    <Book getAll={e} update={update} />
                  </li>
                  ))}
              </ol>
            </div>
          </div>
    )
}

export default Search
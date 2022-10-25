import React from 'react';
import Book from './Book'

const RenderSearch = ({ dataa, updateShelf }) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {dataa.map((book, idx) => (
                <li key={idx}>
                    <Book book={book} updateShelf={updateShelf} />
                </li>
                ))}
            </ol>
        </div>
    )
};

export default RenderSearch;

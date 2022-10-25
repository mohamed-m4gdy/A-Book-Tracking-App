import "../../App.css";
import React, { useState, useEffect } from "react";
import * as BooksAPI from '../../api/BooksAPI'
import Header from '../../components/Header';
import Shelves from '../../components/Shelves';
import RenderSearch from '../RenderSearch'

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [state, setState] = useState([])
  const [search, setSearch] = useState([])
  const [dataa, setDataa] = useState([])

  // Get All Data
  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setState(data)
    });
  }, [])

  // Search API
  useEffect(() => {
    let isActive = true;
    if (search) {
      BooksAPI.search(search).then((data) => {
        if (data.error) {
        } else {
          if (isActive) {
            setDataa(data)
          }
        }
      })
      return () => {
        isActive = false;
        setDataa([])
      }
    }
  }, [search])
  

  // Update Books shelf
  const updateShelf = (fromm, too) => {
    const update = state.map(s => {
      if (s.id === fromm.id) {
        fromm.shelf = too;
        return fromm;
      }
      return s;
    })
    BooksAPI.update(fromm, too).then(data => setState(update));
  }
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => setShowSearchpage(!showSearchPage)} > Close </a>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title, author, or ISBN" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <RenderSearch dataa={dataa} updateShelf={updateShelf} />
        </div>
      ) : (
        <div className="list-books">
          <Header />
          <Shelves books={state} updateShelf={updateShelf} />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

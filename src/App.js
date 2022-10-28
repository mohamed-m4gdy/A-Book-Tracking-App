import "./App.css";
import { useState, useEffect } from "react";
import ListOfBooks from "./components/ListOfBooks";
import * as BooksAPI from "./BooksAPI";
import Result from "./components/Result";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  // Get All Data
  const [getAll, setGetAll] = useState([]);
  // Search Data
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);

  // Search Data
  useEffect(() => {
    if (query.length > 0) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setData([]);
          setErr(data);
        } else {
          setData(data);
          setErr([]);
        }
      });
    } else {
      setData([]);
      setErr([]);
    }
  }, [query]);


  // Update
  const update = (book, shelf) => {
    const updateBook = getAll.map(b => {
      if (b.id === book.id) {
        book.shelf = shelf;
      }
      return b;
    })
    BooksAPI.update(book, shelf).then(setGetAll(updateBook))
  }


  // Get All Data
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setGetAll(data);
    });
  }, []);
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
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
            <Result data={data} err={err} update={update} getAll={getAll} />
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListOfBooks getAll={getAll} update={update} />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

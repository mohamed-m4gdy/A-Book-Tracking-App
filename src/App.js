import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";
import Page from "./components/Page";

function App() {
  // Get All Data
  const [books, setBooks] = useState([]);
  // Search Data
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [idOfBooks, setIdOfBooks] = useState(new Map());
  const [merge, setMerge] = useState([]);

  // Get All Data
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
      setIdOfBooks(cmob(data));
    });
  }, []);
  // Update data
  const update = (book, shelf) => {
    const updateBook = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    });
    if (!idOfBooks.has(book.id)) {
      book.shelf = shelf
      updateBook.push(book)
    }
    setBooks(updateBook);
    BooksAPI.update(book, shelf);
  };

  const cmob = (e) => {
    const map = new Map();
    e.map((d) => map.set(d.id, d));
    return map;
  };
  useEffect(() => {
    const merged = data.map((d) => {
      if (idOfBooks.has(d.id)) {
        return idOfBooks.get(d.id);
      } else {
        return d;
      }
    });
    setMerge(merged);
  }, [data, idOfBooks]);

  // Search Data
  useEffect(() => {
    let active = true;
    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setData([]);
        } else {
          if (active) {
            setData(data);
            console.log(data);
          }
        }
      });
    } else {
      setData([]);
    }
    return () => {
      active = false;
      setData([]);
    };
  }, [query]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              query={query}
              setQuery={setQuery}
              merge={merge}
              update={update}
              getAll={books}
            />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Page
              query={query}
              setQuery={setQuery}
              merge={merge}
              update={update}
              getAll={books}
            />
          }
        />
      </Routes>
    </div>
  );
}
// <Result data={data} err={err} update={update} getAll={books} />
export default App;

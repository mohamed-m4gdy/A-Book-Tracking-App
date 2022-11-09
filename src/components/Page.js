import React from "react";
import ListOfBooks from "./ListOfBooks";
import { Link } from "react-router-dom";

const Page = ({ query, setQuery, merge, update, getAll }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <ListOfBooks getAll={getAll} update={update} />
      <div className="open-search">
        <Link to="/Search">Add a book</Link>
      </div>
    </div>
  );
};
export default Page
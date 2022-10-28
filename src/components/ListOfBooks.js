import React from "react";
import Shelf from './Shelf'

const ListOfBooks = ({ getAll, update }) => {

  const currentlyReading = getAll.filter(
    (g) => g.shelf === "currentlyReading"
  );
  const wantToRead = getAll.filter((g) => g.shelf === "wantToRead");
  const read = getAll.filter((g) => g.shelf === "read");

  return (
    <div className="list-books-content">
      <Shelf getAll={currentlyReading} title={"Currently Reading"} update={update} />
      <Shelf getAll={wantToRead} title={"Want To Read"} update={update} />
      <Shelf getAll={read} title={"Read"} update={update} />
    </div>
  );
};

export default ListOfBooks;

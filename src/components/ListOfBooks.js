import React from "react";
import Shelf from './Shelf'

const ListOfBooks = ({ getAll }) => {

  const currentlyReading = getAll.filter(
    (g) => g.shelf === "currentlyReading"
  );
  const wantToRead = getAll.filter((g) => g.shelf === "wantToRead");
  const read = getAll.filter((g) => g.shelf === "read");

  return (
    <div className="list-books-content">
      <Shelf getAll={currentlyReading} title={"Currently Reading"} />
      <Shelf getAll={wantToRead} title={"Want To Read"} />
      <Shelf getAll={read} title={"Read"} />
    </div>
  );
};

export default ListOfBooks;

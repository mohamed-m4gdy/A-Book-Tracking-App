import React from "react";

const UpdateShelf = ({ select, update }) => {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={select.shelf ? select.shelf : "none"}
        onChange={(e) => update(select, e.target.value)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default UpdateShelf;

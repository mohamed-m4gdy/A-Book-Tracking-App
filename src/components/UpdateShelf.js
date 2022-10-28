import React from "react";

const UpdateShelf = ({ getAll, update }) => {
  
  return (
    <div className="book-shelf-changer">
      <select defaultValue={getAll.shelf ? getAll.shelf : "none"} onChange={(e) => update(getAll, e.target.value)}>
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

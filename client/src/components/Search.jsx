import React from "react";
import "../App.css";

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="filter" />
      <button >Search</button>
    </form>
  );
}

export default Search;
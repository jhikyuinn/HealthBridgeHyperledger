import React from "react";


function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form style={{textalign:"center"}} onSubmit={handleSubmit}>
      <input name="filter" />
      <button >Search</button>
    </form>
  );
}

export default Search;
import React from "react";

function SearchFilter({ placeholder, data }) {
  return (
    <div className="search">
      <div className="input"></div>
      <input type="text" placeholder={placeholder}></input>
      <div className="filteredData"></div>
      {/* Loops through data to return names of places*/}
      {data.map((value, key) => {
        return <div>{value.name}</div>;
      })}
    </div>
  );
}

export default SearchFilter;

import React, { useState } from "react";
import "./SearchFilter.css"


function SearchFilter({ placeholder, data }) {
  // Create a state to hold filtered data list
  const [filteredData, setFilteredData] = useState([]);
  // Pass the event of the input to access values
  const handleFilter = (event) => {
    const searchData = event.target.value;
    // Only show data that is searched for
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchData.toLowerCase());
    });
    // Hide data until a search matches proper filter values
    if (searchData === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  // Add search bar with placehoder and event handler
  return (
    <div className="searchBar">
      <div className="input">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        ></input>
      </div>

      {/* Only show filtered data when array is not empty */}
      {filteredData.length != 0 && (
        <div className="filteredResults">
          {filteredData.map((value, key) => {
            return (
              <div>
                <a className="dataName" href={value.link} target="_blank">
                  <p>{value.name}</p>
                </a>
                <p>{value.city}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchFilter;

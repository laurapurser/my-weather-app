import React from "react";
import SearchResults from "./SearchResults";
import "./SearchResults.css";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div>
      <h2 className="SearchForm">
        <form id="search-form">
          <input
            type="text"
            id="search-text-input"
            placeholder="Enter a city"
            className="search-field"
          />{" "}
          <input type="submit" value="Search" className="submit-button" />
          <button
            type="button"
            id="current-weather"
            className="current-weather"
          >
            Current
          </button>{" "}
        </form>
      </h2>
      <SearchResults />
    </div>
  );
}

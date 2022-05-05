import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <h2 className="SearchForm">
      <form id="search-form">
        <input
          type="text"
          id="search-text-input"
          placeholder="Enter a city"
          className="search-field"
        />
        <input type="submit" value="Search" className="submit-button" />
        <button type="button" id="current-weather" className="current-weather">
          Current
        </button>
      </form>
    </h2>
  );
}

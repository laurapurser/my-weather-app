import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./SearchResults.css";
import "./SearchForm.css";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      feels: response.data.main.feels_like,
      temp: response.data.main.temp,
      // iconUrl:
      current: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=082d3d02ffdb12f2fd9b259e2ced1d0d&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <h2 className="SearchForm">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="search-text-input"
              placeholder="Enter a city"
              className="search-field"
              onChange={handleCityChange}
            />{" "}
            <input type="submit" value="Search" className="submit-button" />{" "}
            <button
              type="button"
              id="current-weather"
              className="current-weather"
            >
              Current
            </button>{" "}
          </form>
        </h2>
        <SearchResults data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}

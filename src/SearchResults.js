import React, { useState } from "react";
import "./SearchResults.css";
import axios from "axios";

export default function SearchResults() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      city: "New York",
      date: "May 6th 2022",
      feels: response.data.main.feels_like,
      temp: response.data.main.temp,
      current: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="row results">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <ul>
                <li className="card-title" id="cardtitle">
                  {weatherData.city}
                </li>

                <li className="cardtexttwo" id="date-line">
                  {weatherData.date}
                </li>

                <li className="cardtextthree" id="temp-number">
                  {Math.round(weatherData.temp)}°C
                </li>

                <li className="cardtext" id="feelslike">
                  Feels like: {Math.round(weatherData.feels)}°C
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card card-one">
            <div className="card-body">
              <ul>
                <li className="cardtext text-capitalize">
                  Current view: {weatherData.current}{" "}
                  <span id="description" class="describe"></span>
                </li>
                <li className="cardtext" id="actual-humidity">
                  Humidity: {weatherData.humidity}%
                </li>
                <li className="cardtext" id="high">
                  High: {weatherData.max}°C
                </li>
                <li className="cardtext" id="low">
                  Low: {weatherData.min}°C
                </li>

                <li className="cardtext" id="windspeed">
                  Windspeed: {Math.round(weatherData.wind)}mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=082d3d02ffdb12f2fd9b259e2ced1d0d&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}

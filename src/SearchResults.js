import React from "react";
import "./SearchResults.css";
import FormattedDate from "./FormattedDate.js";

export default function SearchResults(props) {
  return (
    <div className="row results">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <ul>
              <li className="card-title" id="cardtitle">
                {props.data.city}
              </li>

              <li className="cardtexttwo" id="date-line">
                <FormattedDate date={props.data.date} />
              </li>

              <li className="cardtextthree" id="temp-number">
                {Math.round(props.data.temp)}°C
              </li>

              <li className="cardtext" id="feelslike">
                Feels like: {Math.round(props.data.feels)}°C
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
                Current view: {props.data.current}{" "}
                <span id="description" class="describe"></span>
              </li>
              <li className="cardtext" id="actual-humidity">
                Humidity: {props.data.humidity}%
              </li>
              <li className="cardtext" id="high">
                High: {Math.round(props.data.max)}°C
              </li>
              <li className="cardtext" id="low">
                Low: {Math.round(props.data.min)}°C
              </li>

              <li className="cardtext" id="windspeed">
                Windspeed: {Math.round(props.data.wind)}mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

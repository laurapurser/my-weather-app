import React from "react";
import "./SearchResults.css";

export default function SearchResults() {
  return (
    <div className="row results">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <ul>
              <li className="card-title" id="cardtitle"></li>

              <li className="cardtexttwo" id="date-line"></li>

              <li className="cardtextthree" id="temp-number"></li>

              <li className="cardtext" id="feelslike">
                Feels like:
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="card card-one">
          <div className="card-body">
            <ul>
              <li className="cardtext">
                Current view: <span id="description" class="describe"></span>
              </li>
              <li className="cardtext" id="actual-humidity">
                Humidity:
              </li>
              <li className="cardtext" id="high">
                High:{" "}
              </li>
              <li className="cardtext" id="low">
                Low: 24°C
              </li>

              <li className="cardtext" id="windspeed">
                Windspeed: mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

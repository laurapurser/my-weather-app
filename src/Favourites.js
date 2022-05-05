import React from "react";
import "./Favourites.css";

export default function Favourites() {
  return (
    <div className="container-two">
      <div className="row">
        <div className="col-3">
          <button className="favourite" id="favourite-maidstone">
            Maidstone
          </button>
        </div>
        <div className="col-3">
          <button className="favourite" id="favourite-harlow">
            Harlow{" "}
          </button>
        </div>
        <div className="col-3">
          <button className="favourite" id="favourite-watford">
            Watford{" "}
          </button>
        </div>
        <div className="col-3">
          <button className="favourite" id="favourite-whitleybay">
            Whitley Bay
          </button>
        </div>
      </div>
    </div>
  );
}

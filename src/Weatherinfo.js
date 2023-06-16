import React from "react";
import WeatherDate from "./WeatherDate";
import Weathericon from "./Weathericon";

export default function Weatherinfo(props) {
  return (
    <div>
      <h1>{props.info.city} </h1>
      <ul>
        <li>
          <WeatherDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <Weathericon code={props.info.icon} size={52} />
              <span className="temperature">
                {Math.round(props.info.temperature)}
              </span>{" "}
              <span className="unit">°C</span>{" "}
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.info.humidity}%</li>
            <li>Wind:{props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Weathericon from "./Weathericon";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.dailyForecast.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="mt-5">
      <div className="dayForecast">{day()}</div>
      <Weathericon code={props.dailyForecast.weather[0].icon} size={40} />
      <div className="tempratureForecast">
        <span className="maxTemp">
          {" "}
          {Math.round(props.dailyForecast.temp.max)}°
        </span>
        <span className="minTemp">
          {Math.round(props.dailyForecast.temp.min)}°
        </span>
      </div>
    </div>
  );
}

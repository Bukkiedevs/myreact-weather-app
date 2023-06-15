import React, { useState } from "react";
import "./Weatherforecast.css";
import axios from "axios";

export default function Weatherforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weatherforecast">
        <div className="row">
          <div className="col">
            <div className="dayForecast">{forecast[0].dt}</div>
            <img src={props.infoIcon} alt="#" />
            <div className="tempratureForecast">
              <span className="maxTemp">
                {" "}
                {Math.round(forecast[0].temp.max)}°
              </span>
              <span className="minTemp">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6782253072f7d90462731a624097fc54";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import Weatherforecast from "./Weatherforecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCityName] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCityName(event.target.value);
  }
  function search() {
    const apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city...."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo info={weather} />
        <Weatherforecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Still Loading";
  }
}

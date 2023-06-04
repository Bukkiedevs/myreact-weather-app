import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCityName] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "6643c7326a4c2a38838264a28531d97e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleCityChange(event) {
    setCityName(event.target.value);
    search(city);
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
      </div>
    );
  } else {
    search();
    return "Still Loading";
  }
}

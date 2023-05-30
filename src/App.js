import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city...."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Stockholm </h1>
      <ul>
        <li>Tuesday 2:24</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />{" "}
          15°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://omoleye-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Omoleye Gbemisola
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Bukkiedevs"
          target="_blank"
          rel="noreferrer"
        >
          open sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://special-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

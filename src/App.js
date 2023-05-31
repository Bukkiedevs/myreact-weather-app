import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
    </div>
  );
}

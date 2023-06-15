import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function Weathericon(props) {
  return (
    <ReactAnimatedWeather
      icon={"CLEAR_DAY"}
      color="#1e1e1e"
      size={34}
      animate={true}
    />
  );
}

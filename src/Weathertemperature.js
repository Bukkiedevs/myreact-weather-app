import React from "react";
export default function Weathertemperature(props) {
  return (
    <div>
      <span className="temperature">{Math.round(props.celsuis)}</span>{" "}
      <span className="unit">°C</span>
    </div>
  );
}

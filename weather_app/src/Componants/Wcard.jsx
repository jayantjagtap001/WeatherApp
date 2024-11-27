import React from "react";

const Wcard = ({ weather }) => (
  <div className="weather-card" style={{backgroundColor:"pink"}}>
    <h2>{weather.name}</h2>
    <p>Temperature: {weather.main.temp}°C</p>
    <p>Humidity: {weather.main.humidity}%</p>
    <p>Wind Speed: {weather.wind.speed} m/s</p>
  </div>
);

export default Wcard;



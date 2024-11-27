import React from "react";

const  Wflist= ({ forecast }) => (
  <div className="forecast-list">
    <h3>3-Day Forecast</h3>
    <ul>
      {forecast.map((item, index) => (
        <li key={index}>
          <p>Date: {item.dt_txt}</p>
          <p>Temp: {item.main.temp}°C</p>
          <p>Weather: {item.weather[0].description}</p>
          <hr />
        </li>
      ))}
    </ul>
  </div>
);

export default  Wflist;



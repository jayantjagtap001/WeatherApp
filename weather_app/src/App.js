import React, { useState, useEffect } from "react";
import "./App.css";
import { getForecastData, getWeatherData } from "./services/WService";
import Wdragdown from "./Componants/Wdragdown";
import Wcard from "./Componants/Wcard";
import Wflist from "./Componants/Wflist";

const App = () => {
  const [city, setCity] = useState(
    localStorage.getItem("selectedCity")
  );
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const cities = ["Ho Chi Minh", "Singapore", "Kuala Lumpur", "Tokyo", "Athens","India"];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData=await getWeatherData(city);
        
        setWeather(weatherData);

        const forecastData = await getForecastData(city, 3);
        
        setForecast(forecastData.list);
      } 
      catch (error) 
      {
        console.error("Error in the featching the data:", error);
      }
    };

    fetchWeather(()=>{
      <h1> </h1>
    });
  }, [city]);

  useEffect(() => {
    localStorage.setItem("selectedCity", city);
  }, [city]);

  return (
    <div className="App">
      <h1 style={{backgroundColor:"yellow"}}>Weather Forecast App</h1>
      <hr></hr>
      <Wdragdown options={cities} selected={city} onChange={setCity} />
      {weather && <Wcard weather={weather} />}
      {forecast.length > 0 && <Wflist forecast={forecast} />}
    </div>
  );
};

export default App;

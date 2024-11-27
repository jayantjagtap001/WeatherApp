import axios from "axios";

const API_KEY = "a52e7e1f9cd15c4f30656d99fe345124";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};

export const getForecastData = async (city, days = 3) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      cnt: days * 8, 
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};

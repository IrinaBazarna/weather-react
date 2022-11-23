import React, { useState } from "react";
import axios from "axios";

function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6fd11e5ce241d9d3bdebb9aba9f2f93e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    console.log();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature{Math.round(weather.temperature)}°C</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{weather.wind}km/h</li>
          <li>Description:{weather.description}</li>

          <li>
            <img src={weather.icon} alt="Icon Weather" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
export default Weather;

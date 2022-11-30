import React, { useState } from "react";
import WeatherDate from "./WeatherDate";
import axios from "axios";
import "./Weather.css";

function weatherInf(props) {
  const [city, setCity] = useState(props.city);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState(null);

  function weather(response) {
    setLoaded(true);
    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
    setTemperature(response.data.main.temp);
  }
  function temperature(event) {
    setTemperature(response.data.main.temp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6fd11e5ce241d9d3bdebb9aba9f2f93e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    weather();
    temperature();
  }
  let form = (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              onChange={updateCity}
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn" />
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <WeatherDate />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
export default weatherInf;

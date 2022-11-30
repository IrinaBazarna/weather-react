import React, { useState } from "react";
import WeatherDate from "./src/WeatherDate";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
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

  if (weather.loaded) {
    return (
      <div>
        {form}
        <WeatherDate date={weather} />
      </div>
    );
  } else {
    return (
      { form },
      (
        <div className="Weatherinf">
          <h1>{props.data.city}</h1>
          <ul>
            <li>{props.data.date}</li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">{props.data.icon}</div>
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(props.data.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
                <li>Humidity: {response.data.main.humidity} %</li>
                <li>Wind: {response.data.wind.speed} km/h</li>
                <li>Description: {response.data.weather[0].description}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    );

    search();
    return "Loading...";
  }
}
export default Weather;

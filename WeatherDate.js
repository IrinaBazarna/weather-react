import React from "react";
import DayChange from "./DayChange";

export default function WeatherDate(props){
return (
     <div className="Weather">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <DayChange date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
             <Icon code={props.data.icon} alt={props.data.description} />
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
              />
              <span className="temperature">{Math.round(props.data.temperature)}</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Temperature{Math.round(weather.temperature)}°C</li>
                <li>Humidity:{weather.humidity}%</li>
                <li>Wind:{weather.wind}km/h</li>
                <li>Description:{weather.description}</li>
          </ul>  </div>
          </div>
        </div>
    );
}
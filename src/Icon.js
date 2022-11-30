import React from "react";

export default function Icon(props) {
  return <img src={props.data.weather.icon} alt={props.alt} />;
}

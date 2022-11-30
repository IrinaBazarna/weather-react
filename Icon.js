import React from "react";

export default function Icon(props) {
  return <img src={props.data.weather[0].icon} alt={props.alt} />;
}

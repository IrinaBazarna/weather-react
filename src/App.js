import React, {Component} from "react";
import Weather from "./Weather";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wheather App</h1>
        <Weather />
        <p>
          <a
            className="App-link"
            href="https://github.com/IrinaBazarna/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open sourse code
          </a>{" "}
          by Irina Bazarna
        </p>
      </header>
    </div>
  );
}

export default App;

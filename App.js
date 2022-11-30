import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
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
        </div>
      </div>
    </div>
  );
}

export default App;

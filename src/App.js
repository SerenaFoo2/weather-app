import "./App.css";
import React, { useState } from "react";
// import { Route, Link } from "react-router-dom";
// import Searchbar from "./components/Searchbar";
import DateBuilder from "./components/DateBuilder";
// import Nav from "react-bootstrap/Nav";

const api = {
  key: "22c18d78d7892649a696644d07c4ba65",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) //either weather or weather forecast
        .then((res) => res.json()) //get json from the response
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        }); //..which passes through another promise. Set the weather as the result
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 20
            ? "App cold"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {/* <div className="search-box-bar">
        <Searchbar searched={search} queried={query} setQueried = {setQuery} events={event} />
        </div> */}


        {typeof weather.main != "undefined" ? ( //need to add the check in otherwise error. Ternary operator will only work if there is an element wrapped around it
          //if weather.main is NOT undefined, true below. Otherwise returns "string"
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">
                <DateBuilder />
              </div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          "Location not found"
        )}
      </main>
    </div>
  );
}

export default App;

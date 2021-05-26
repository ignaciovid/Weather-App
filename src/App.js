import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar/Nav";
import Cards from "../src/components/Cards/Cards";
import About from "../src/components/About/About";
import Ciudad from "../src/components/Ciudad/Ciudad";

export default function App() {
  const [cities, setCities] = useState("");

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  
  
  const onSearch = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.main !== undefined) {
          const ciudad = {
            min: Math.round(res.main.temp_min),
            max: Math.round(res.main.temp_max),
            img: res.weather[0].icon,
            id: res.id,
            wind: res.wind.speed,
            temp: res.main.temp,
            name: res.name,
            weather: res.weather[0].main,
            clouds: res.clouds.all,
            latitud: res.coord.lat,
            longitud: res.coord.lon
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  };

  function onFilter(ciudadId) {
    let ciudad = cities.filter((ciud) => ciud.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Route path="/" render={() => <Navbar onSearch={onSearch} />} />
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route path="/about" exact component={About} />
    </div>
  );
}

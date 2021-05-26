import React from "react";
import { Link } from "react-router-dom";
import styles from "../Ciudad/Ciudad.module.css";

export default function Ciudad({ city }) {
  return (
    <div>
      <div>
        <div className={styles.ciudadContainer} key={city.id}>
          <h2>{city.name}</h2>
          <div>
            <Link to="/">
              <div className={styles.btnContainer}>
              <button type="button" class="btn btn-danger">Volver</button>
              </div>
            </Link>
            <img
              className="iconoClima"
              src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
              width="80"
              height="80"
              alt="imgClima"
            />
          </div>
          <div>Temperatura: {parseInt(city.temp)} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {parseInt(city.latitud)}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}

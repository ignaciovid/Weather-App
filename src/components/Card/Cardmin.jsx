import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cardmin.module.css";

export default function Cardmin({ id, name, max, min, img, onClose }) {
  return (
    <div className={styles.card} key={id}>
      <div id={styles.closeIcon} className="row">
        <button className="btn btn-sm btn-danger" onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className={styles.cardBody}>
        <Link style={{ textDecoration: 'none' }} to={`/ciudad/${id}`}>
          <h5 className={styles.cardTitle}>{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <b>Max</b>
            <p>{max}°</p>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <b>Min</b>
            <p>{min}°</p>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              width="80"
              height="80"
              alt="imgClima"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

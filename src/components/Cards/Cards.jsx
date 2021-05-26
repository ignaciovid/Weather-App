import React from "react";
import Card from "../Card/Card";
import Cardmin from "../Card/Cardmin";
import styles from "./Cards.module.css";
import 'animate.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div >
      {cities ? (
        <div className={styles.cardsContainer}>
          {cities.map((info) =>
            info.max < 25 ? (
              <Cardmin
                id={info.id}
                img={info.img}
                name={info.name}
                key={info.id}
                min={info.min}
                max={info.max}
                onClick={onClose}
                onClose={() => onClose(info.id)}
                />
                ) : (
                <Card
                id={info.id}
                img={info.img}
                name={info.name}
                key={info.id}
                min={info.min}
                max={info.max}
                onClick={onClose}
                onClose={() => onClose(info.id)}
                />
            )
          )}
        </div>
      ) : (
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            color: "#DEDEFE",
            marginTop: "250px",
          }}
        >
          Sin ciudades...
        </h3>
      )}
    </div>
  );
}

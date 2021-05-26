import React, {useState} from "react";
import styles from "./Searchbar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("")

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);

        }}
      >
        <div className={styles.inputContainer}>
          <input
            id={styles.inputCiudad}
            type="text"
            value={city}
            placeholder="Buscar ciudad..."
            onChange={e => setCity(e.target.value)}
          />

          <button type="submit" className="btn btn-outline-success"> Buscar </button>
        </div>
      </form>
    </>
  );
}

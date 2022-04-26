import styles from "./Country.module.css";

const Country = (props) => {
  return (
    <div className={styles.countries}>
      <article className={styles.country}>
        <img className={`${styles["country__img"]}`} src={props.flag} />
        <div className={`${styles["country__data"]}`}>
          <h3 className={`${styles["country__name"]}`}>{props.name}</h3>
          <h4 className={`${styles["country__region"]}`}>
            {props.capital ? props.capital : "Not Found"}
          </h4>
          <p className={`${styles["country__row"]}`}>
            <span>👫</span>
            {props.population > 999999
              ? (+props.population / 1000000).toFixed(1) + " Million"
              : (+props.population / 1000).toFixed(1) + " Thousand"}
          </p>
          <p className={`${styles["country__row"]}`}>
            <span>🗣️</span>
            {props.languages ? props.languages : "Not Found"}
          </p>
          <p className={`${styles["country__row"]}`}>
            <span>💰</span>
            {props.currencies ? props.currencies : "Not Found"}
          </p>
          <p className={`${styles["country__row"]}`}>
            <a href={props.maps} target="_blank">
              <span>🌎</span>Map
            </a>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Country;

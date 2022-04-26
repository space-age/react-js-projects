import styles from "./Author.module.css";

const Author = () => {
  return (
    <div>
      <h2 className={styles.author}>
        Creator:
        <span className={`${styles["author-name"]}`}>
          {" "}
          Christopher Casillas
        </span>
      </h2>
    </div>
  );
};

export default Author;

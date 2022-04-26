import styles from "./Author.module.css";

const Author = (props) => {
  return (
    <div>
      <p className={styles.author}>
        Creator:{" "}
        <span className={`${styles["author-name"]}`}>Christopher Casillas</span>
      </p>
    </div>
  );
};

export default Author;

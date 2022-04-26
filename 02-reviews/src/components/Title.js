import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.title}>
      <h2>{props.title}</h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Title;

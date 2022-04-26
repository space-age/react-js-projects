import styles from "./Result.module.css";

const Result = (props) => {
  const classes =
    props.count > 0
      ? styles.result_positive
      : props.count < 0
      ? styles.result_negative
      : "";

  return (
    <div>
      <span className={`${styles.result} ${classes}`}>{props.count}</span>;
    </div>
  );
};

export default Result;

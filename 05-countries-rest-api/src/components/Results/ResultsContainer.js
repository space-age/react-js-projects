import styles from "./ResultsContainer.module.css";

const ResultsContainer = (props) => {
  return (
    <main className={`${styles["main-container"]}`}>{props.children}</main>
  );
};

export default ResultsContainer;

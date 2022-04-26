import styles from "./Button.module.css";

const Button = (props) => {
  const buttonHandler = (event) => {
    event.preventDefault();
    props.counter();
  };

  const classes =
    props.button.toLowerCase() === "reset" ? styles.button : styles.other;

  return (
    <button onClick={buttonHandler} className={classes}>
      {props.button}
    </button>
  );
};

export default Button;

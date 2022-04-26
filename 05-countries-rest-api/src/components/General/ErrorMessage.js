import styles from "./ErrorMessage.module.css";
import { ExclamationIcon } from "@heroicons/react/outline";

const ErrorMessage = (props) => {
  return (
    <div className={styles.error}>
      <div>
        <ExclamationIcon />
      </div>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMessage;

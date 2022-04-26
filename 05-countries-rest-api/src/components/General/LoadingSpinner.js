import styles from "./LoadingSpinner.module.css";

import { SunIcon } from "@heroicons/react/outline";

const LoadSpinner = (props) => {
  return (
    <div className={`${styles["loading-spinner--container"]}`}>
      <SunIcon className={`${styles["loading-spinner--logo"]}`} />
    </div>
  );
};

export default LoadSpinner;

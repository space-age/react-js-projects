import { useContext } from "react";
import StateContext from "../../state/state-context";

import styles from "./MainButton.module.css";

const MainButton = (props) => {
  const ctx = useContext(StateContext);

  const buttonHandler = () => {
    const query = "/all";
    ctx.loadSearchResults(query);
  };

  return (
    <button
      className={`${styles["tabs-main-button"]} ${props.className}`}
      value={props.query}
      onClick={props.query === "all" ? buttonHandler : undefined}
    >
      {props.buttonName}
    </button>
  );
};

export default MainButton;

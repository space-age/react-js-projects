import styles from "./TabsButton.module.css";

import StateContext from "../../../state/state-context";
import { useContext } from "react";

const TabsButton = (props) => {
  const ctx = useContext(StateContext);

  const buttonHandler = () => {
    const query = props.query + props.buttonName;
    ctx.loadSearchResults(query);
  };

  return (
    <button
      className={`${styles["tabs-button"]}`}
      value={props.query}
      onClick={buttonHandler}
    >
      {props.buttonName}
    </button>
  );
};

export default TabsButton;

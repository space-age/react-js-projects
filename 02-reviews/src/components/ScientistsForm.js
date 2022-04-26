import Card from "./UI/Card.js";
import Buttons from "./Buttons.js";

import styles from "./ScientistsForm.module.css";
import { useState } from "react";

const ScientistsForm = (props) => {
  const [scientist, setScientist] = useState(0);

  const showNewScientist = (scientist) => {
    setScientist(scientist);
  };

  return (
    <Card>
      <div className={`${styles["img-container"]}`}>
        <img
          src={props.scientists[scientist].img}
          id={`${styles["person-img"]}`}
          alt="Nikola Tesla"
        />
      </div>

      <h4 id={styles.scientist}>{props.scientists[scientist].name}</h4>
      <p id={styles.job}>{props.scientists[scientist].job}</p>
      <p id={styles.info}>{props.scientists[scientist].text}</p>
      <a id="link" href={props.scientists[scientist].link} target="_blank">
        For more exciting information
      </a>
      <Buttons
        scientists={props.scientists}
        showNewScientist={showNewScientist}
        scientist={scientist}
      />
    </Card>
  );
};

export default ScientistsForm;

import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const prev = "<";
  const next = ">";

  const showRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * props.scientists.length);
    while (props.scientist === randomNumber) {
      randomNumber = Math.floor(Math.random() * props.scientists.length);
    }
    props.showNewScientist(randomNumber);
  };

  const showNextPerson = () => {
    let newScientistIndex = props.scientist + 1;
    if (newScientistIndex > props.scientists.length - 1) newScientistIndex = 0;
    props.showNewScientist(newScientistIndex);
  };

  const showPreviousPerson = () => {
    let newScientistIndex = props.scientist - 1;
    if (newScientistIndex < 0) newScientistIndex = props.scientists.length - 1;
    props.showNewScientist(newScientistIndex);
  };

  return (
    <div>
      {/* Previous & Next button */}
      <div className={`${styles["button-container"]}`}>
        <button
          className={`${styles["prev-btn"]}`}
          onClick={showPreviousPerson}
        >
          {prev}
        </button>
        <button className={`${styles["next-btn"]}`} onClick={showNextPerson}>
          {next}
        </button>
      </div>
      {/* Random button  */}
      <button className={`${styles["random-btn"]}`} onClick={showRandomPerson}>
        Another Scientist
      </button>
      ;
    </div>
  );
};

export default Buttons;

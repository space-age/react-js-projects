import StateContext from "../../state/state-context";

import { useRef, useContext } from "react";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  const ctx = useContext(StateContext);
  const countryInputRef = useRef();

  const handlerSearchInput = (event) => {
    event.preventDefault();
    const enteredCountry = countryInputRef.current.value;
    if (enteredCountry.trim().length === 0) {
      console.log("Empty country name entered");
      return;
    }
    const query = "/name/" + enteredCountry;
    ctx.loadSearchResults(query);
    countryInputRef.current.value = "";
  };

  return (
    <div className={`${styles["input--container"]}`}>
      <form
        className={`${styles["input--form"]}`}
        onSubmit={handlerSearchInput}
      >
        <input
          className={`${styles["input--search-field"]}`}
          type="search"
          placeholder="Search for countries..."
          title="Type in a country"
          ref={countryInputRef}
        />
      </form>
    </div>
  );
};

export default SearchInput;

import MainButton from "../MainButton";
import TabsDropdownContent from "./TabsDropdownContent";

import styles from "./TabsDropdown.module.css";
import { useState } from "react";

const TabsDropdown = (props) => {
  return (
    <div className={`${styles["tabs-dropdown"]}`}>
      <MainButton
        className={`${styles["tabs-dropdown-button"]}`}
        buttonName={props.tabName}
      />
      <TabsDropdownContent
        className={`${styles["tabs-dropdown-content"]}`}
        arrayNames={props.arrayNames}
        query={props.query}
      />
    </div>
  );
};

export default TabsDropdown;

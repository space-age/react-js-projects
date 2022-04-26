import styles from "./Navigation.module.css";
import MainButton from "./MainButton";
import TabsDropdown from "./Tabs/TabsDropdown";

import * as myConstants from "../../Config/config.js";

const Navigation = () => {
  return (
    <div className={`${styles["nav-tabs-container"]}`}>
      <MainButton buttonName="All Countries" query="all" />
      {myConstants.TABS_DROPDOWN_ARRAY.map((tab) => (
        <TabsDropdown
          key={tab.id}
          arrayNames={tab.arrayNames}
          query={tab.query}
          tabName={tab.tabName}
        />
      ))}
    </div>
  );
};

export default Navigation;

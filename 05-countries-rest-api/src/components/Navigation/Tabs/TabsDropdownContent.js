import TabsButton from "./TabsButton";

const TabsDropdownContent = (props) => {
  return (
    <div className={props.className}>
      {props.arrayNames.map((name) => (
        <TabsButton key={name} buttonName={name} query={props.query} />
      ))}
    </div>
  );
};

export default TabsDropdownContent;

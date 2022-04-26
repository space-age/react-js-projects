import styles from "./SectionContainer.module.css";

const SectionContainer = (props) => {
  const classes = `${styles.container} ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default SectionContainer;

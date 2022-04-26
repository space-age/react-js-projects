import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;

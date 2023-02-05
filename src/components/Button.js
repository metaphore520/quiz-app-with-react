import classes from "../styles/Button.module.css";

function Button({ children }) {
  return <div className={classes.button}>{children}</div>;
}

export default Button;

import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

function Answers() {
  return (
    <div className={classes.answers}>
      {/* Option 1  */}
      <Checkbox className={classes.answer} text="Test Start"></Checkbox>
    </div>
  );
}

export default Answers;

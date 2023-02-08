import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

function Answers({ options = [], handleAnswerChange }) {
  return (
    <div className={classes.answers}>
      {/* Option 1  */}

      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleAnswerChange(e, index)}
        ></Checkbox>
      ))}
    </div>
  );
}

export default Answers;

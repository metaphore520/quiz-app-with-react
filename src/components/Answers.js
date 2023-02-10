import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

function Answers({ options = [], handleAnswerChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) =>
        input ? (
          <Checkbox
            className={classes.answer}
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(e) => {
              handleAnswerChange(e, index);
            }}
          ></Checkbox>
        ) : (
          <Checkbox
            className={`${classes.answer} ${
              option.correct
                ? classes.correct
                : option.checked
                ? classes.wrong
                : null
            }`}
            text={option.title}
            defaultChecked={option.checked}
            disabled
          ></Checkbox>
        )
      )}
    </div>
  );
}

export default Answers;

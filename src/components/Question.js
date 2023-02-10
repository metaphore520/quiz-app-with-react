import classes from "../styles/Question.module.css";
import Answers from "./Answers";
function Question({ question }) {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {question.title}
      </div>
      <Answers options={question.options}></Answers>
    </div>
  );
}

export default Question;

import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

function Result() {
  const { videoId } = useParams();
  const location = useLocation();
  const { state } = location;
  const { error, loading, answers } = useAnswers(videoId);
  console.log("------------------------");
  console.log(location);
  var score = 0;
  function calculate() {
    let checkedIndexes = [];
    let correctIndexes = [];
    answers.forEach((question, index1) => {
      checkedIndexes = [];
      correctIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (state[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(checkedIndexes, correctIndexes)) {
        score += 5;
      }
    });
    return score;
  }
  const userScore = calculate();
  return (
    <>
      {loading && <h1>Loading........</h1>}
      {error && <h1>There was an error occurred</h1>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

export default Result;

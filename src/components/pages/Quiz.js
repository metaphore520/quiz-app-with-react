import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

function Quiz() {
  const initialState = null;
  const [currentQuestion, setCurrentQuestion] = useState();

  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);

  const reducer = (state, action) => {
    switch (action.type) {
      case "questions":
        action.value.forEach((element) => {
          element.options.forEach((option) => {
            option.checked = false;
          });
        });
        return action.value;
      case "answer":
        let questions = _.cloneDeep();
        questions[action.questionId].option[action.optionIndex].checked =
          action.value;
        return questions;
      default:
        return state;
    }
  };
  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "questions", value: questions });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.value,
    });
  }

  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <h1>{qna[currentQuestion].title}</h1>
      <Answers
        options={qna[currentQuestion].options}
        handleChange={handleAnswerChange}
      />
      <ProgressBar></ProgressBar>
      <MiniPlayer></MiniPlayer>
    </>
  );
}

export default Quiz;

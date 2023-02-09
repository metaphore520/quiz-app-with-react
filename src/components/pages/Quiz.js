import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

function Quiz() {
  const initialState = null;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { videoId } = useParams();
  const { loading, error, questions } = useQuestions(videoId);

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
        let questions = _.cloneDeep(state);
        questions[action.questionId].options[action.optionIndex].checked =
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
      value: e.target.checked,
    });
  }
  // 5
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  const percentage =
    currentQuestion > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  async function submit() {
    let { uid } = currentUser;
    let db = getDatabase();
    let refData = ref(db, `result/${uid}`);

    await set(refData, {
      [videoId]: qna,
    });

    navigate(`/result/${videoId}`, {
      state: qna,
    });
  }
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      {loading && <div>Loading.........</div>}
      {error && <div>There Was an error</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <Answers
            options={qna[currentQuestion].options}
            handleAnswerChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submit}
          ></ProgressBar>
          <MiniPlayer></MiniPlayer>
        </>
      )}
    </>
  );
}

export default Quiz;

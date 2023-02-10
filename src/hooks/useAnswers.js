import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

function useAnswers(videoId) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      let db = getDatabase();
      let answerRef = ref(db, "answers/" + videoId + "/questions");
      let answerQuery = query(answerRef, orderByKey());

      try {
        setError("");
        setLoading(true);
        const snapShot = await get(answerQuery);
        if (snapShot.exists()) {
          setAnswers((prevState) => [
            ...prevState,
            ...Object.values(snapShot.val()),
          ]);
          setLoading(false);
          setError("");
        } else {
        }
      } catch (error) {
        console.log(error);
        setError(error.toString());
        setLoading(false);
      }
    }
    fetchAnswers();
  }, [videoId]);
  return {
    error,
    loading,
    answers,
  };
}

export default useAnswers;

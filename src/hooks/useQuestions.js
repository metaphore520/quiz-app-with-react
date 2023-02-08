import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

function useQuestions(videoId) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      let db = getDatabase();
      let questionRef = ref(db, "quiz/" + videoId + "/questions");
      let questionQuery = query(questionRef, orderByKey());

      try {
        setError("");
        setLoading(true);
        const snapShot = await get(questionQuery);
        if (snapShot.exists()) {
          setQuestions((prevState) => [
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
    fetchQuestions();
  }, [videoId]);
  return {
    error,
    loading,
    questions,
  };
}

export default useQuestions;

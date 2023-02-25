import { getDatabase, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export default function usePostDb(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    async function requestPost() {
      try {
        setLoading(true);
        setError(false);
        let db = getDatabase();
        let newUser = {
          name: "Rahat",
          profilePicture: "src/image1",
        };
        let refData = ref(db, url);
        let newUserRef = push(refData);
        const data = await set(newUserRef, {
          name: "Rahat",
          profilePicture: "src/image",
        });
        ///
        setLoading(false);
        setPostData(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(err);
      }
    }
    requestPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    postData,
  };
}

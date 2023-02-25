import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useFetchDb(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);

        var db = getDatabase();
        var reference = ref(db, url);
        var customQuery = query(reference, orderByKey());
        var snapShot = await get(customQuery);
        if (snapShot.exists()) {
          setGetData((prevState) => [...Object.values(snapShot.val())]);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    getData,
  };
}

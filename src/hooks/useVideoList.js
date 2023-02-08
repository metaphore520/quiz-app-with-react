import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

function useVideoList(page) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      let db = getDatabase();
      let videosRef = ref(db, "videos");
      let videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(4)
      );

      try {
        setError("");
        setLoading(true);
        const snapShot = await get(videoQuery);
        if (snapShot.exists()) {
          setVideos((prevState) => [
            ...prevState,
            ...Object.values(snapShot.val()),
          ]);
          setLoading(false);
          setError("");
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setError(error.toString());
        setLoading(false);
      }
    }
    fetchVideos();
  }, [page]);
  return {
    error,
    loading,
    videos,
    hasMore,
  };
}

export default useVideoList;

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

function Videos() {
  const [page, setPage] = useState(1);
  const { error, videos, loading, hasMore } = useVideoList(page);

  return (
    <div style={{ scrolling: true }}>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => {
            setPage(page + 1);
          }}
          hasMore={hasMore}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  youtubeID={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                youtubeID={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {error && (
        <div>
          Some Error Has Happened <div>{error.toString}</div>
        </div>
      )}
      {loading && (
        <div>
          <h1>Loading .....................</h1>
        </div>
      )}
    </div>
  );
}

export default Videos;

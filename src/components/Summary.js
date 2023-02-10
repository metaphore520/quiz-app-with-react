import { useMemo } from "react";
import successImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);
  const { error, loading, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXEL_API,
    }
  );
  const image = result ? result.photos[0].src.medium : successImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}

      {/* <div className={classes.badge}>
        <img src={successImage} alt="Success" />
      </div> */}
    </div>
  );
}

export default Summary;

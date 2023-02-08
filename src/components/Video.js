import classes from "../styles/Video.module.css";
const Video = ({ youtubeID, noq, title }) => {
  return (
    // <a href="quiz.html">
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>
    //</a>
  );
};

export default Video;

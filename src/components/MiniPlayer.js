import { useRef, useState } from "react";
import classes from "../styles/MiniPlayer.module.css";

function MiniPlayer({ videoId, title }) {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  function toggleMiniPlayer() {
    if (status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(false);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(true);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;

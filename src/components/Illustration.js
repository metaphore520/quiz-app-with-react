import classes from "../styles/Illustration.module.css";

function Illustration({ imageSource, alt }) {
  return (
    <div className={classes.illustration}>
      <img src={imageSource} alt={alt} />
    </div>
  );
}

export default Illustration;

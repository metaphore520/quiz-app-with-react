import { getSourceFromByte } from "../dataLayer/db";
import classes from "../styles/UserProfile.module.css";

function User({ ProfilePicture, Name }) {
  // const imageDataTemp = `data:image/png;base64,${imageData}`;

  var imageDataTemp = getSourceFromByte(ProfilePicture);
  console.log(imageDataTemp);
  return (
    // <div class="row">
    //   <span class="col-md-4">{name}</span>
    //   <span class="col-md-4">{address}</span>
    //   <span class="col-md-4">
    //     <img
    //       src={imageDataTemp}
    //       style={{ height: "100px", width: "100px" }}
    //       alt="this is an"
    //     ></img>
    //   </span>
    // </div>
    <div className="row">
      <div className="col-md-4">
        <div className={`${classes.card}`}>
          <img src={imageDataTemp} alt="John" />
          <h1>Nabil Sarwar Rahat</h1>
          <p className={`${classes.title}`}>Software Engineer</p>
          <p>Khulna University of Engineering & Technology</p>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <p>
            <button className={`${classes.button}`}>Contact</button>
          </p>
        </div>
      </div>
      <div className="col-md-8"></div>
    </div>
  );
}

export default User;

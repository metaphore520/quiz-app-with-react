import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imageSource={signupImage} alt="Signup" />
        <Form className={`${classes.signup}`}>
          <TextInput
            type="text"
            placeholder="Enter Name..."
            icon="person"
          ></TextInput>

          <TextInput
            type="text"
            placeholder="Enter Email..."
            icon="alternate_email"
          ></TextInput>

          <TextInput
            type="password"
            placeholder="Enter Password..."
            icon="lock"
          ></TextInput>

          <TextInput
            type="password"
            placeholder="Confirm Password..."
            icon="lock_clock"
          ></TextInput>

          <Checkbox text="I agree to th terms &amp; conditions" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Signup;

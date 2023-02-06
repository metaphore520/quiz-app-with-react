import loginImage from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration imageSource={loginImage} alt="Login" />
        <Form className={`${classes.login}`}>
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
          <Button>Submit Now</Button>
          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;

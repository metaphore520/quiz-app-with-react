import loginImage from "../../assets/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration imageSource={loginImage} alt="Login" />
        <LoginForm></LoginForm>
      </div>
    </>
  );
}

export default Login;

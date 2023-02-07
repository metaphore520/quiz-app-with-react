import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

function SignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLaoding] = useState(true);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return setError("Password Doesn't Match");
      }
      setError("");
      setLaoding(true);
      await signup(email, password, userName);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.toString());
      setLaoding(false);
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Name..."
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></TextInput>

      <TextInput
        type="text"
        placeholder="Enter Email..."
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>

      <TextInput
        type="password"
        placeholder="Enter Password..."
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <TextInput
        type="password"
        placeholder="Confirm Password..."
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextInput>

      <Checkbox
        text="I agree to th terms &amp; conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button type="Submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <div className="error">{error}</div>}
      <div className="info">
        Already have an account?
        <Link to="/login">Login</Link>
        {/* <a href="login.html">Login</a>  */}
        instead.
      </div>
    </Form>
  );
}

export default SignupForm;

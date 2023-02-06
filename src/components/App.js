import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <Outlet /> */}
      </Layout>
    </Router>
  );
}

export default App;

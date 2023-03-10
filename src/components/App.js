import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/" element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />}></Route>
            </Route>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/result/:videoId" element={<Result />}></Route>
              <Route path="/quiz/:videoId" element={<Quiz />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/user/profile" element={<UserProfile />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

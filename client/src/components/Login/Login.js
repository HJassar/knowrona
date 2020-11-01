import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/auth/auth.actions";

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  document.title = "Knowrona | Login";

  // Stores the email in the email state
  const handleEmail = (e) => setEmail(e.target.value);

  // Stores the password in the password state
  const handlePassword = (e) => setPassword(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    //SNEHA: USE THIS ENDPOINT ON BACKEND
    axios
      .post("/auth/login", userData)
      .then((res) => {
        //SNEHA: Response is expecting a JWT "token" from the backend. So try initially with {token: (whatever generated token you have made)} and pass that object in a response back to the front end.
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        console.log(
          "AXIOS HEADER SHOULD BE FALSE INITIALLY: ",
          axios.defaults.headers.common["Authorization"]
        );
        if (token) {
          // Apply authorization token to every request if logged in
          axios.defaults.headers.common["Authorization"] = token;
        } else {
          // Delete auth header
          delete axios.defaults.headers.common["Authorization"];
        }
        console.log(
          "AXIOS HEADER SHOULD BE NOW BE TRUE: ",
          axios.defaults.headers.common["Authorization"]
        );
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        setCurrentUser(decoded);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="container">
        <form className="login-form">
          <div className="form-group">
            <input
              className="form-group__input"
              type="text"
              value={email}
              onChange={handleEmail}
              placeholder="Username or Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-group__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="form-group">
            <button className="primary-btn">LOGIN</button>
          </div>
        </form>

        <div className="Login__paragraph">
          <p>
            Don't have an account yet?{" "}
            <Link className="Login__link" to="/register">
              Register here
            </Link>
          </p>
          <p>
            <Link className="Login__link" to="/forget-password">
              Click Here
            </Link>{" "}
            to recover your password
          </p>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (decoded) => dispatch(setCurrentUser(decoded)),
});
export default connect(null, mapDispatchToProps)(Login);

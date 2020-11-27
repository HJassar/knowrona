import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

import shown from "./shown.png";
import hidden from "./hidden.png";

import passwordValidator from "password-validator";
import CheckBox from "../CheckBox/CheckBox";
import Loader from "react-loader-spinner";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // Password Validation State:
  const [min, setMin] = useState(false);
  const [max, setMax] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasTwoDigits, setHasTwoDigits] = useState(false);
  const [hasNoSpaces, setHasNoSpaces] = useState(true);
  const [isUsernameAlphanumeric, setIsUsernameAlphanumeric] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  //Realtime check of email availability
  const [doneTypingEmailInterval, setDoneTypingEmailInterval] = useState(500); //time in ms (5 seconds)
  const [emailTypingTimer, setEmailTypingTimer] = useState(null); //state t o hold the time in
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState("");

  //Realtime check of username availability
  const [doneTypingUsernameInterval, setDoneTypingUsernameInterval] = useState(
    500
  ); //time in ms (5 seconds)
  const [usernameTypingTimer, setUsernameTypingTimer] = useState(null); //state t o hold the time in
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [usernameCheckLoading, setUsernameCheckLoading] = useState(false);
  const [usernameDisplay, setUsernameDisplay] = useState("");

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const onEmailKeyUp = (e) => {
    clearTimeout(emailTypingTimer);
    if (email !== "") {
      setEmailCheckLoading(false);
    }
    const input = e.target.value;
    if (e.target.value && isEmailValid) {
      if (email !== "") {
        setEmailCheckLoading(true);
      }
      setEmailTypingTimer(
        setTimeout(() => {
          checkEmailExists(input);
        }, doneTypingEmailInterval)
      );
    }
  };

  const onUsernameKeyUp = (e) => {
    clearTimeout(usernameTypingTimer);
    if (username !== "") {
      setUsernameCheckLoading(false);
    }
    const input = e.target.value;
    if (e.target.value && isUsernameAlphanumeric) {
      if (username !== "") {
        setUsernameCheckLoading(true);
      }
      setUsernameTypingTimer(
        setTimeout(() => {
          checkUsernameExists(input);
        }, doneTypingUsernameInterval)
      );
    }
  };

  const checkEmailExists = (email) => {
    const emailTimeStamp = Date.now();
    console.log(Date.now());
    axios
      .get(`/auth/validateEmail/${email}/${emailTimeStamp}`)
      .then((res) => {
        console.log("Original TimeStamp: ", emailTimeStamp);
        console.log("Received TimeStamp: ", res.data.timeStamp);
        if (
          res.data.available === "true" &&
          res.data.timeStamp >= emailTimeStamp
        ) {
          setEmailDisplay(email);
          setIsEmailAvailable(true);
          console.log("Most recent request");
        } else if (
          res.data.available === "false" &&
          res.data.timeStamp >= emailTimeStamp
        ) {
          setEmailDisplay(email);
          setIsEmailAvailable(false);
          console.log("Stale request or not available");
        }
        console.log(res.data);
        setEmailCheckLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const checkUsernameExists = (username) => {
    const usernameTimeStamp = Date.now();
    console.log(Date.now());
    axios
      .get(`/auth/validateUsername/${username}/${usernameTimeStamp}`)
      .then((res) => {
        console.log("Original TimeStamp: ", usernameTimeStamp);
        console.log("Received TimeStamp: ", res.data.timeStamp);
        if (
          res.data.available === "true" &&
          res.data.timeStamp >= usernameTimeStamp
        ) {
          setUsernameDisplay(username);
          setIsUsernameAvailable(true);
          console.log("Most recent request");
        } else if (
          res.data.available === "false" &&
          res.data.timeStamp >= usernameTimeStamp
        ) {
          setUsernameDisplay(username);
          setIsUsernameAvailable(false);
          console.log("Stale request or not available");
        }
        console.log(res.data);
        setUsernameCheckLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleEmail = (e) => {
    const isEmailValid = new passwordValidator();
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isEmailValid.has(regex);
    setIsEmailValid(isEmailValid.validate(e.target.value));
    setEmail(e.target.value);
  };

  const handleUsername = (e) => {
    const isAlphaNumeric = new passwordValidator();
    const regex = /^[0-9a-zA-Z]+$/;
    isAlphaNumeric.has(regex);
    setIsUsernameAlphanumeric(isAlphaNumeric.validate(e.target.value));
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    const isMinValidate = new passwordValidator();
    isMinValidate.is().min(4); // Minimum length 4
    isMinValidate.validate(e.target.value) ? setMin(true) : setMin(false);
    const isMaxValidate = new passwordValidator();
    isMaxValidate.is().max(12); // Maximum length 12
    isMaxValidate.validate(e.target.value) ? setMax(true) : setMax(false);
    const hasSymbolsValidate = new passwordValidator();
    hasSymbolsValidate.has().symbols(); // Must have symbols
    hasSymbolsValidate.validate(e.target.value)
      ? setHasSymbols(true)
      : setHasSymbols(false);
    const hasUppercaseValidate = new passwordValidator();
    hasUppercaseValidate.has().uppercase(); // Must have Uppercase letters
    hasUppercaseValidate.validate(e.target.value)
      ? setHasUppercase(true)
      : setHasUppercase(false);
    const hasLowercaseValidate = new passwordValidator();
    hasLowercaseValidate.has().lowercase(); // Must have Lowercase letters
    hasLowercaseValidate.validate(e.target.value)
      ? setHasLowercase(true)
      : setHasLowercase(false);
    const hasTwoDigitsValidate = new passwordValidator();
    hasTwoDigitsValidate.has().digits(2); // Must have at least 2 digits
    hasTwoDigitsValidate.validate(e.target.value)
      ? setHasTwoDigits(true)
      : setHasTwoDigits(false);
    const hasNoSpacesValidate = new passwordValidator();
    hasNoSpacesValidate.has().not().spaces(); // Should not have spaces
    hasNoSpacesValidate.validate(e.target.value)
      ? setHasNoSpaces(true)
      : setHasNoSpaces(false);
    //   .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => setPassword2(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords don't match");
      return;
    }
    const newUser = {
      email,
      username,
      password,
      password2,
    };
    console.log(newUser);
    axios
      .post("/auth/register", newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const togglePasswordVisible = (e) => {
    passwordTypeSetter(e, setTogglePassword, togglePassword);
  };

  const toggleConfirmPasswordVisible = (e) => {
    passwordTypeSetter(e, setToggleConfirmPassword, toggleConfirmPassword);
  };

  const passwordTypeSetter = (e, stateSet, state) => {
    console.log(e.target);
    console.log(e.target.parentNode.previousSibling);
    if (e.target.parentNode.previousSibling) {
      if (e.target.parentNode.previousSibling.type === "password") {
        e.target.parentNode.previousSibling.type = "text";
        stateSet(!state);
      } else {
        e.target.parentNode.previousSibling.type = "password";
        stateSet(!state);
      }
    }
  };
  return (
    <>
      <div className="container">
        <form className="registration-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-group__input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmail}
              required
              onKeyUp={onEmailKeyUp}
            />
          </div>
          <div>
            <CheckBox checked={isEmailValid ? "True" : "False"} />
            Valid Email Address
          </div>
          {isEmailValid && emailCheckLoading ? (
            <div>
              <span>Checking Availability</span>
              <Loader
                type="ThreeDots"
                color="var(--primary)"
                height={20}
                width={20}
                timeout={0}
              />
            </div>
          ) : isEmailValid ? (
            <div>
              <CheckBox
                checked={isEmailAvailable && email ? "True" : "False"}
              />
              <span>
                {email === ""
                  ? "Enter a valid e-mail address to check for availability."
                  : isEmailAvailable
                  ? `${emailDisplay} is available`
                  : `${emailDisplay} is already taken. Please choose a different email`}
              </span>
            </div>
          ) : (
            "Enter a valid e-mail address to check for availability."
          )}
          <div className="form-group">
            <input
              className="form-group__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
              required
              onKeyUp={onUsernameKeyUp}
            />
          </div>
          <div>
            <CheckBox checked={isUsernameAlphanumeric ? "True" : "False"} />
            Username contains only letters and numbers with no spaces.
          </div>
          {isUsernameAlphanumeric && usernameCheckLoading ? (
            <div>
              <span>Checking Availability</span>
              <Loader
                type="ThreeDots"
                color="var(--primary)"
                height={20}
                width={20}
                timeout={0}
              />
            </div>
          ) : isUsernameAlphanumeric ? (
            <div>
              <CheckBox
                checked={isUsernameAvailable && username ? "True" : "False"}
              />
              <span>
                {username === ""
                  ? "Enter a valid username to check for availability."
                  : isUsernameAvailable
                  ? `${usernameDisplay} is available`
                  : `${usernameDisplay} is already taken. Please choose a different username.`}
              </span>
            </div>
          ) : (
            "Enter a valid username to check for availability."
          )}
          <div className="form-group">
            <input
              className="form-group__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              required
            />
            <div
              className="form-group__toggle-password"
              onClick={togglePasswordVisible}
            >
              {togglePassword ? <img src={shown} /> : <img src={hidden} />}
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-group__input"
              type="password"
              placeholder="Confirm password"
              value={password2}
              onChange={handleConfirmPassword}
              required
            />
            <div
              className="form-group__toggle-password"
              onClick={toggleConfirmPasswordVisible}
            >
              {toggleConfirmPassword ? (
                <img src={shown} />
              ) : (
                <img src={hidden} />
              )}
            </div>
          </div>
          <div>
            <ul>
              <li>
                <CheckBox
                  checked={
                    password === password2 &&
                    password !== "" &&
                    password2 !== ""
                      ? "True"
                      : "False"
                  }
                />
                Passwords Match
              </li>
              <li>
                <CheckBox checked={min ? "True" : "False"} />
                Minimum Length of 4
              </li>
              <li>
                <CheckBox checked={max ? "True" : "False"} />
                Maximum Length of 12
              </li>
              <li>
                <CheckBox checked={hasSymbols ? "True" : "False"} />
                Must have at least one symbol
              </li>
              <li>
                <CheckBox checked={hasUppercase ? "True" : "False"} />
                Must have at least one uppercase letter
              </li>
              <li>
                <CheckBox checked={hasLowercase ? "True" : "False"} />
                Must have at least one lowercase letter
              </li>
              <li>
                <CheckBox checked={hasTwoDigits ? "True" : "False"} />
                Must have at least 2 digits
              </li>
              <li>
                <CheckBox checked={hasNoSpaces ? "True" : "False"} />
                Should not have any spaces
              </li>
            </ul>
          </div>
          <div className="form-group">
            <button className="primary-btn">Register</button>
          </div>
          <p className="Register__paragraph">
            Already have an account?{" "}
            <Link className="Register__link" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;

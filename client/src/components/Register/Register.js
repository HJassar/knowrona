import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

import passwordValidator from "password-validator";
import CheckBox from "../CheckBox/CheckBox";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password Validation State:
  const [min8, setMin8] = useState(false);
  const [max100, setMax100] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasTwoDigits, setHasTwoDigits] = useState(false);
  const [hasNoSpaces, setHasNoSpaces] = useState(true);

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handlePassword = (e) => {
    const isMin8Validate = new passwordValidator();
    isMin8Validate.is().min(8); // Minimum length 8
    isMin8Validate.validate(e.target.value) ? setMin8(true) : setMin8(false);
    const isMax100Validate = new passwordValidator();
    isMax100Validate.is().max(100); // Maximum length 100
    isMax100Validate.validate(e.target.value)
      ? setMax100(true)
      : setMax100(false);
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
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      username,
      password,
      confirmPassword,
    };
    //SNEHA: So we can test functionality, you can pass back the object containing the data for the newly created user as the response.
    axios
      .post("/register", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
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
            />
          </div>
          <div className="form-group">
            <input
              className="form-group__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
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
            <input
              className="form-group__input"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              required
            />
          </div>
          <div>
            <ul>
              <li>
                <CheckBox checked={min8 ? "True" : "False"} />
                Minimum Length of 8
              </li>
              <li>
                <CheckBox checked={max100 ? "True" : "False"} />
                Maximum Length of 100
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

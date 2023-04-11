import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// refactor: need to move handleMouseDown function to separate file for reuseability
// missing: authentication functionality

function Login() {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const displayPasswordOnClick = () => {
    setDisplayPassword(!displayPassword);
    setToggleIcon(!toggleIcon);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-view">
      <h1>Login</h1>
      <form>
        <div className="username-container">
          <label form="userName" className="screenReaderOnly">
            Username
          </label>
          <input id="userName" type="text" placeholder="Username" />
        </div>

        <div className="password-container">
          <label form="password" className="screenReaderOnly display-password">
            Password
          </label>
          <input
            id="password"
            type={displayPassword ? "text" : "password"}
            placeholder="Password"
            minLength="4"
            maxLength="20"
          />
          <FontAwesomeIcon
            className="eye-slash"
            onClick={() => displayPasswordOnClick()}
            style={{ display: toggleIcon ? "none" : "block" }}
            onMouseDown={handleMouseDown}
            icon={faEyeSlash}
          />
          <FontAwesomeIcon
            className="eye"
            onClick={() => displayPasswordOnClick()}
            style={{ display: toggleIcon ? "block" : "none" }}
            icon={faEye}
          />
        </div>
          <button type="button">Sign In</button>
      </form>
    </div>
  );
}

export default Login;

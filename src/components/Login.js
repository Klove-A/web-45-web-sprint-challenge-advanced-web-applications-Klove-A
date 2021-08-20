import React, { useState } from "react";
import axios from "axios";

import axiosWithAuth from "../helpers/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
  error: ""
};

const Login = (props) => {
  const [ credentials, setCredentials ] = useState(initialFormValues);

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
    console.log("Login handleChange", credentials)
  }
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("password", res.data.password);
        props.history.push("")
      })
      .catch(err => {
        setCredentials({...credentials, error: "Your username or password is incorect."})
      })
  };

  const { error } = credentials;
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button id="submit">Log in</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
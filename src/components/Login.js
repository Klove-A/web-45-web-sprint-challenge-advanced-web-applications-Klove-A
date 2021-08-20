import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const { credentials, setCredentials } = useState({
    username: '',
    password: ''
  })

  // handleChange = e => {
  //   setCredentials(e.target.name, e.target.value)
  // }
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // login = e => {
  //   e.preventDefault();
  //   axios.post("")
  //     .then(res => {

  //     })
  // };

  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        {/* <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </form> */}
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
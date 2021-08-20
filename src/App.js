import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {

  const handleLogout = ()=> {
    axiosWithAuth()
      .post('/logout')
        .then(res=> {
          localStorage.removeItem("token");
           localStorage.removeItem("username", res.data.username);
           localStorage.removeItem("password", res.data.password);
        });

  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogout} data-testid="logoutButton" href='/login'>logout</a>
        </header>
        <Switch>
          <PrivateRoute path="/protected" component={BubblePage}/>
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
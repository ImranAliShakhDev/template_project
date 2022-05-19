import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

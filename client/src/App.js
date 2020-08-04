import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";

import FreeTest from "./components/freeTest/FreeTest";
import Result from "./components/resultsPage/Results";
import OneResultPage from "./components/oneResultPage/OneResultPage";
import Tutorials from "./components/tutorials/Tutorials";
import DrivingTips from "./components/drivingTips/DrivingTips";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/freetest" component={FreeTest} />
          <Route path="/results" component={Result} />
          <Route path="/oneResultPage" component={OneResultPage} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/drivingTips" component={DrivingTips} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;

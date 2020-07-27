import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
// import { Link, Route, Switch } from "react-router-dom";
// import withAuth from "./withAuth";
import Home from "./Home";
// import Secret from "./Secret";
// import Login from "./Login";
import ResultPage from "./components/Result/ResultPage"
import FreeTest from "./components/freeTest/FreeTest";
import Result from "./components/resultsPage/Results";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/freetest" component={FreeTest} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/results" component={Result} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;

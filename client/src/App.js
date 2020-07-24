import React, { Component } from "react";
<<<<<<< HEAD
// import { Link, Route, Switch } from "react-router-dom";
// import withAuth from "./withAuth";
import Home from "./Home";
// import Secret from "./Secret";
// import Login from "./Login";
import CustomNavbar from "./components/home/CustomNavbar";
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
//import withAuth from "./withAuth";
import Home from "./Home";
//import Secret from "./Secret";
//import Login from "./Login";
import FreeTest from "./components/FreeTest/FreeTest";
>>>>>>> development

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <CustomNavbar />
        <Home />
=======
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/freetest" component={FreeTest} />
          <Redirect to="/" />
        </Switch>
>>>>>>> development
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
        </Switch> */}
<<<<<<< HEAD
      </div>
=======
      </Router>
>>>>>>> development
    );
  }
}

export default App;

import React, { Component } from "react";
import Picture from "./components/home/Picture";
import Cards from "./components/home/Cards";
import Practice from "./components/home/Practice";
import Footer from "./components/home/Footer";
<<<<<<< HEAD
=======
import CustomNavbar from "./components/home/CustomNavbar";
>>>>>>> development

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: "Loading...",
    };
  }

  componentDidMount() {
    fetch("/api/home")
      .then((res) => res.text())
      .then((res) => this.setState({ message: res }));
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
=======
        <CustomNavbar />
>>>>>>> development
        <Picture />
        <Cards />
        <Practice />
        <Footer />
      </div>
    );
  }
}

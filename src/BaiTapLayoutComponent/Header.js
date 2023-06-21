// rcc (react-class-component)

import React, { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Nav />
        </nav>
      </>
    );
  }
}

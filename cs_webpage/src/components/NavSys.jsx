import React, { Component } from "react";
import "./NavSys.css";

export default class NavSys extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navBar">
        <div>
          <div className="hamburger" onClick={this.handleClick}>
            <i className={this.state.clicked ? "close" : "fas fa-bars"}></i>
          </div>
        </div>

        <ul className={this.state.clicked ? "nav-links-active" : "nav-links"}>
          <li>
            <a href="/" exact>
              Home
            </a>
          </li>
          <li className="tue">
            <a href="/foo#About">About</a>
          </li>
          <li>
            <a href="/bar#Event">Event</a>
          </li>
          <li>
            <a href="/bar#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

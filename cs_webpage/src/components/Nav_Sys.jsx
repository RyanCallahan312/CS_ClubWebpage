import React, { Component } from "react";
import "./Nav_Sys.css";

import "./navSystem.css";

export default class Nav_Sys extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
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

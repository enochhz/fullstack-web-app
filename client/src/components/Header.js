import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a className="brand-logo center">Event Codex</a>
          <ul className="right">
            <li><a>Add an event</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;

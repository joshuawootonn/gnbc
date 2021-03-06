import Link from "gatsby-link";

import React, { Component } from "react";

class Header extends Component {
 
  render() {
    return (
      <nav
        className={`navbar ${this.props.isNavTransparent && "is-transparent"} is-fixed-top`}
        role="navigation"
        aria-label="main navigation"
        
      >
        <div className="navbar-brand">
          <Link
            className="navbar-element"
            activeClassName="active"
            exact
            to="/"
          >
            Good News
          </Link>
          <button
            className={`hamburger hamburger--slider ${
              this.props.isNavMenuActive ? "is-invisible" : null
            }`}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded="true"
            onClick={this.props.toggleBurger}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        
      </nav>
    );
  }
}

export default Header;

// <a
//   role="button"
//   className="navbar-burger"
//   aria-label="menu"
//   aria-expanded="false"
// >
//   <span aria-hidden="true" />
//   <span aria-hidden="true" />
//   <span aria-hidden="true" />
// </a>

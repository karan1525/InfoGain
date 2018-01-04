import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapped">
          <a className="left brand-logo">
            Infogain
          </a>
          <ul className="right">
            <li>
              <a>
                Login With Google
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

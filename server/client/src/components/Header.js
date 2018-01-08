import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  renderMobileContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="1">
            <Payments />
          </li>,

          <li
            key="3"
            style={{
              margin: "0 10px",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px"
            }}>
            Credits: {this.props.auth.credits}
          </li>,

          <li key="2">
            <div className="btn left white-text">
              <a href="/api/logout">Logout</a>
            </div>
          </li>
        ];
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{ margin: "0 15px" }}>
            <a href="" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo">
              InfoGain
            </Link>
            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              {this.renderMobileContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

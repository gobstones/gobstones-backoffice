import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import Breadcrumbs from "./Breadcrumbs";
import strings from "src/locales";
import logoImg from "src/assets/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">
          <img src={logoImg} alt="logo" style={{ marginRight: 4 }} />{" "}
          {strings.gobstonesBackoffice}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Breadcrumbs />
          </Nav>
          <Button onClick={this.logout}>{strings.logout}</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  logout = () => {
    this.props.logout();
    window.location.reload();
  };
}

const mapDispatchToProps = ({ auth }) => auth;

export default connect(null, mapDispatchToProps)(NavBar);

import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import strings from "src/locales";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">{strings.gobstonesBackoffice}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">{strings.classrooms}</Nav.Link>
            {/*<Nav.Link href="#link">Other link</Nav.Link>*/}
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

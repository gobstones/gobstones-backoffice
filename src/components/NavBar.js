import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import strings from "src/locales";

export default class NavBar extends React.Component {
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

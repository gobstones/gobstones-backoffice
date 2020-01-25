import React from "react";
import { Form, Button } from "react-bootstrap";
import strings from "src/locales";
import styles from "./Login.module.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.title}>{strings.pleaseLogin}</h1>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={this.login} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </header>
      </div>
    );
  }

  login = () => {
    alert("HOLA");
  };
}

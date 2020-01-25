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
              <Form.Label>{strings.emailAddress}</Form.Label>
              <Form.Control type="email" placeholder={strings.enterEmail} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>{strings.password}</Form.Label>
              <Form.Control
                type="password"
                placeholder={strings.enterPassword}
              />
            </Form.Group>

            <Button onClick={this.login} variant="primary" type="submit">
              {strings.login}
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

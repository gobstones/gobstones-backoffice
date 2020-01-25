import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import strings from "src/locales";
import styles from "./Login.module.css";

class Login extends React.Component {
  render() {
    const {
      username,
      password,
      setUsername,
      setPassword,
      isLoading
    } = this.props;

    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.title}>{strings.pleaseLogin}</h1>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{strings.emailAddress}</Form.Label>
              <Form.Control
                disabled={isLoading}
                type="email"
                placeholder={strings.enterEmail}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>{strings.password}</Form.Label>
              <Form.Control
                disabled={isLoading}
                type="password"
                placeholder={strings.enterPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <Button onClick={this.login} variant="primary" type="submit">
                {strings.login}
              </Button>
            )}
          </Form>
        </header>
      </div>
    );
  }

  login = (e) => {
    e.preventDefault();

    this.props.login().then(() => {
      alert("Re piola");
    });
  };
}

const mapStateToProps = ({ login, loading }) => ({
  ...login,
  isLoading: loading.effects.login.login
});
const mapDispatchToProps = ({ login }) => login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);

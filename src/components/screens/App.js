import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import strings from "src/locales";

class App extends React.Component {
  render() {
    const { logout } = this.props;

    return (
      <div className="App">
        <header>
          <p>ESTOY LOGUEADO!</p>
          <Button
            onClick={() => {
              logout();
            }}
          >
            {strings.logout}
          </Button>
        </header>
      </div>
    );
  }
}

const mapToProps = ({ auth }) => auth;

export default connect(mapToProps, mapToProps)(App);

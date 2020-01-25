import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import strings from "src/locales";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>ESTOY LOGUEADO!</p>
          <Button onClick={this.logout}>{strings.logout}</Button>
        </header>
      </div>
    );
  }

  logout = () => {
    this.props.logout();
    window.location.reload();
  };
}

const mapToProps = ({ auth }) => auth;
export default connect(mapToProps, mapToProps)(App);

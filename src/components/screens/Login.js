import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button onClick={() => alert("HOLA")}>Show Alert</Button>
        </header>
      </div>
    );
  }
}

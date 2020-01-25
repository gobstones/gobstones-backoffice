import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
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

export default App;

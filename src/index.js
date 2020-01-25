import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/es/integration/react";
import App from "./components/App";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

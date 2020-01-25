import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { history } from "./store";

import App from "./components/App";
import OtraRuta from "./components/OtraRuta";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <ConnectedRouter history={history}>
        <Fragment>
          <Switch>
            <Route exact path="/" render={() => <App />} />
            <Route path="/otraruta" render={() => <OtraRuta />} />
          </Switch>
        </Fragment>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

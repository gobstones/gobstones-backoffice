import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { history } from "./store";

import Login from "./components/screens/Login";
import App from "./components/screens/App";
import ClassroomList from "./components/screens/classrooms/ClassroomList";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <ConnectedRouter history={history}>
        <Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                const isLoggedIn = store.getState().auth.token;
                return isLoggedIn ? <App screen={ClassroomList} /> : <Login />;
              }}
            />
          </Switch>
        </Fragment>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

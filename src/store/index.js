import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createRematchPersist from "@rematch/persist";
import { connectRouter } from "connected-react-router";
import models from "./models";
import transformers from "./models/transformers";

const createHistory = require("history").createHashHistory;
export const history = createHistory();

const store = init({
  models,
  plugins: [
    createLoadingPlugin({}),
    createRematchPersist({
      version: 1,
      whitelist: ["auth"],
      transforms: transformers
    })
  ],
  redux: {
    reducers: {
      router: connectRouter(history)
    }
  }
});

export default store;

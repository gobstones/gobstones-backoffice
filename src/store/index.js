import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createRematchPersist from "@rematch/persist";
import models from "./models";
import transformers from "./models/transformers";

const store = init({
  models,
  plugins: [
    createLoadingPlugin({}),
    createRematchPersist({
      version: 1,
      whitelist: ["auth"],
      transforms: transformers
    })
  ]
});

export default store;

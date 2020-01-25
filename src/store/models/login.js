import { gobstonesApi } from "src/api";

const KEY = "login";

const INITIAL_STATE = () => ({
  username: "",
  password: ""
});

export default {
  state: INITIAL_STATE(),
  reducers: {
    setUsername: (state, username) => ({ ...state, username }),
    setPassword: (state, password) => ({ ...state, password }),
    clear: INITIAL_STATE
  },
  effects: (dispatch) => ({
    async login(payload, rootState) {
      const credentials = rootState[KEY];
      await gobstonesApi.login(credentials);
      // TODO: Receive and set token in `auth` model
      dispatch[KEY].clear();
    }
  })
};

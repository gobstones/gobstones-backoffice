import { gobstonesApi } from "src/api";

const KEY = "login";

const INITIAL_STATE = () => ({
  username: "",
  password: "",
  hasError: false
});

export default {
  state: INITIAL_STATE(),
  reducers: {
    setUsername: (state, username) => ({ ...state, username }),
    setPassword: (state, password) => ({ ...state, password }),
    setErrorFlag: (state) => ({ ...state, hasError: true }),
    clearErrorFlag: (state) => ({ ...state, hasError: false }),
    clear: INITIAL_STATE
  },
  effects: (dispatch) => ({
    async login(payload, rootState) {
      const { username, password } = rootState[KEY];

      dispatch[KEY].clearErrorFlag();
      try {
        const response = await gobstonesApi.login(username, password);
        dispatch.auth.setToken(response.token);
        dispatch[KEY].clear();
      } catch (e) {
        dispatch[KEY].setErrorFlag();
        throw e;
      }
    }
  })
};

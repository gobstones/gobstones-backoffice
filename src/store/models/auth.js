// WARNING:
// Every key in this model will be persisted

const INITIAL_STATE = () => ({
  token: null
});

export default {
  state: INITIAL_STATE(),
  reducers: {
    setToken: (state, token) => ({ ...state, token }),
    clear: INITIAL_STATE
  },
  effects: (dispatch) => ({})
};

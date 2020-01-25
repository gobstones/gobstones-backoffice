import { gobstonesApi } from "src/api";

const KEY = "classrooms";

const INITIAL_STATE = () => [];

export default {
  state: INITIAL_STATE(),
  reducers: {
    set: (state, classrooms) => classrooms,
    clear: INITIAL_STATE
  },
  effects: (dispatch) => ({
    async getClassrooms(payload, rootState) {
      const classrooms = await gobstonesApi.getClassrooms();
      dispatch[KEY].set(classrooms);
    }
  })
};

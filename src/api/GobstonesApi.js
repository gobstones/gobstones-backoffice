import axios from "axios";
import transformBody from "./interceptors/transformBody";
import env from "src/config/env";
import store from "src/store";

export default class MedsByMeApi {
  constructor() {
    this.api = transformBody(
      axios.create({
        baseURL: env.API_URL
      })
    );
  }

  login(username, password) {
    return this.api.post("login", {
      username: username.toLowerCase(),
      password
    });
  }

  getClassrooms() {
    return this.api.get("classrooms", {
      headers: {
        Authorization: this.token
      }
    });
  }

  getStudentsOf(courseId) {
    return this.api.get(`courses/${courseId}/students`, {
      headers: {
        Authorization: this.token
      }
    });
  }

  get token() {
    return store.getState().auth.token;
  }
}

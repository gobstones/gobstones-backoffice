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

  getStudentsOf(classroomId) {
    return this.api.get(`classrooms/${classroomId}/students`, {
      headers: {
        Authorization: this.token
      }
    });
  }

  getSubmissionsOf(classroomId, studentId) {
    return this.api.get(
      `/classrooms/${classroomId}/students/${studentId}/submissions`
    );
  }

  get token() {
    return store.getState().auth.token;
  }
}

import axios from "axios";
import transformBody from "./interceptors/transformBody";
import env from "src/config/env";

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
}

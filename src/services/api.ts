import axios from "axios";

export const api = axios.create({
  baseURL: "https://github.com/login/oauth/access_token?",
});

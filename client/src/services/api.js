import axios from "axios";

const API = axios.create({
  baseURL: "https://maritime-backend-4qwk.onrender.com"
});

export default API;
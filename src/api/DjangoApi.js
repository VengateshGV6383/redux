import axios from "axios";
import Cookies from "js-cookie";
const csrftoken = Cookies.get("csrftoken");

const api = axios.create({
  baseURL: "http://localhost:8000/api/todolist",
  headers: {
    "X-CSRFToken": csrftoken,
  },
});
export default api;

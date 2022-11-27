import axios from "axios";
import Store from "./store";
// import { logOut } from "../Pages/Sign/signSlice";
const baseURL =
  process.env.REACT_APP_API_ENDPOINT || "http://localhost:8080/api";
const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("_grecaptcha"));
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  ({ response: { data, status } }) => {
    if (!status) {
      return Promise.reject({ message: "Интернет недоступен" });
    } else if (status === 401) {
      localStorage.removeItem("_grecaptcha");
      // Store.dispatch(logOut(data?.error || data?.message));
    } else if (status === 404) {
      return Promise.reject("Bunday manzil mavjud emas !");
    } else {
      return Promise.reject(data?.error || data?.message);
    }
  }
);

export default instance;

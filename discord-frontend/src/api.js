import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//public routes

export const login = async (data) => {
  return await apiClient
    .post("/auth/login", data)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return {
        error: true,
        exception: error,
      };
    });
};

export const register = async (data) => {
  return await apiClient
    .post("/auth/register", data)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return {
        error: true,
        exception: error,
      };
    });
};

//secure routes

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};

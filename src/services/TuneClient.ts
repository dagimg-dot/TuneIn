import axios from "axios";

const TuneClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

TuneClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default TuneClient;

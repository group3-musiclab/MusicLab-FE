import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import axios from "axios";

axios.defaults.baseURL = "http://34.125.243.136/";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer token`;
  return config;
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import axios from "axios";


import MainHomePage from "./pages/MainHomePage";
import Store from "./utils/context/store";


axios.defaults.baseURL = "http://34.125.243.136/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>
);

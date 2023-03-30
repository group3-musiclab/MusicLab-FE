import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import axios from "axios";
import Store from "./utils/context/store";

axios.defaults.baseURL = "https://baggioshop.site/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>
);

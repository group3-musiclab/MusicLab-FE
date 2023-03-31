import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import axios from "axios";
import Store from "./utils/context/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
axios.defaults.baseURL = "https://baggioshop.site/";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <Store>
        <App />
      </Store>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

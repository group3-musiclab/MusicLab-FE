import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import Home from "./pages/Guru/Home";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

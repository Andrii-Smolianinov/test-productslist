import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { Container } from "./components";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Container>
        <App />
      </Container>
    </React.StrictMode>
  );
}

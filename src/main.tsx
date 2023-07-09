import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider, theme } from "antd";
import "./assets/style/style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: "Epilogue",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

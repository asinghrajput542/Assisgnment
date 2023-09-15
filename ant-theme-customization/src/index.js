import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token global like hover
          // colorPrimary: "#794AFE",
          // colorText: "#794AFE",
          // borderRadius: 10,
          // Alias Token
          // colorBgContainer: "#EDE2FF",
        },
        components: {
          Input: {
            // colorPrimary: "red",
            // algorithm: true,
          },
          Button: {
            colorPrimary: "#794AFE",
          },
          Radio: {
            buttonSolidCheckedBg: "red",
            // colorText: "#794AFE",
            // colorBgTextActive: "#794AFE",
            // colorPrimaryActive: "#794AFE",
            // colorPrimaryBg: "#794AFE",
            // colorBgContainer: "#EDE2FF",
            // colorBgTextActive: "#EDE2FF",
            // colorPrimaryActive: "#EDE2FF",
            buttonSolidCheckedColor: "red",
            // algorithm: true,
          },
          Checkbox: {
            borderRadius: 50,
            algorithm: true,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

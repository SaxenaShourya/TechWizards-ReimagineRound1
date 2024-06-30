import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import store from "./redux/app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        <Analytics />
        <SpeedInsights />
      </Provider>
    </Router>
  </React.StrictMode>
);

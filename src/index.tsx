import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/styles/_all.css";
import Router from "./shared/components/router/Router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

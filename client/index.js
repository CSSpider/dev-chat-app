import store from "./store";
import { Provider } from "react-redux";
import App from "./App";
import React from "react";
import { createRoot } from 'react-dom/client';
import css from "./static/styles.css";
import appCss from "./static/appStyles.css";
// import { loadUsersActionCreator } from "./actions/action-creators";


  
createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
      <App />
  </Provider>
);
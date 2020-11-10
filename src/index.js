import React from "react";
import ReactDOM from "react-dom";

import * as registerServiceWorker from './registerServiceWorker'
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
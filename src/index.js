import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyletronProvider>,
  document.getElementById("root")
);

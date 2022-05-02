import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import "./index.css";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);
ReactDOM.render(
  <SpeechProvider appId="7db88364-0965-442a-a823-0ba0fc4b376a" language="en-US">
    <App />
  </SpeechProvider>,
  document.getElementById("root")
);

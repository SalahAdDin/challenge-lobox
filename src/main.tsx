import React from "react";
import ReactDOM from "react-dom/client";

import App from "@presentation/App";

import reportWebVitals from "./reportWebVitals";

async function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { default: worker } = await import("../mocks/browser");

    return worker.start();
  }

  return Promise.resolve();
}

prepare().then(
  () => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  },
  () => {},
);

reportWebVitals();

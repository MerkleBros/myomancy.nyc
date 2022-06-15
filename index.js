import ReactDOM from "react-dom";
import { App } from "./components/App";
import { MemoryRouter } from "react-router-dom";

const app = document.getElementById("app");
ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  app
);

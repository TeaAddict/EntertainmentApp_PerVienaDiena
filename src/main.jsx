import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { UpdateProvider } from "./components/Context/UpdateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASEPATH}>
      <UpdateProvider>
        <App />
      </UpdateProvider>
    </BrowserRouter>
  </StrictMode>
);

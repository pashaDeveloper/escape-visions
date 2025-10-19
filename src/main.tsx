import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import './lib/i18n';
import { BrowserRouter } from "react-router-dom";

// Set document direction based on language
const path = window.location.pathname;
const pathParts = path.split('/').filter(part => part !== '');
const lang = pathParts[0] === 'en' ? 'en' : 'fa';
document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
document.documentElement.lang = lang;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
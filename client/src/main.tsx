import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Chargement ultra-rapide de toutes les fontes critiques
import('@fontsource/plus-jakarta-sans/400.css');
import('@fontsource/plus-jakarta-sans/600.css');
import('@fontsource/plus-jakarta-sans/700.css');

createRoot(document.getElementById("root")!).render(<App />);

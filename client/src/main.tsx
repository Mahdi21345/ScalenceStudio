import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Chargement immédiat des fontes critiques, différé pour les autres
import('@fontsource/plus-jakarta-sans/400.css');
setTimeout(() => {
  import('@fontsource/plus-jakarta-sans/600.css');
  import('@fontsource/plus-jakarta-sans/700.css');
}, 1);

createRoot(document.getElementById("root")!).render(<App />);

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Chargement différé des fontes pour ne pas bloquer le rendu
setTimeout(() => {
  import('@fontsource/plus-jakarta-sans/400.css');
  import('@fontsource/plus-jakarta-sans/600.css');
  import('@fontsource/plus-jakarta-sans/700.css');
}, 10);

createRoot(document.getElementById("root")!).render(<App />);

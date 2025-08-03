import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";

// Lazy load fontes et App pour accélérer le premier rendu
const App = lazy(() => import("./App"));

// Chargement asynchrone des fontes
const loadFonts = async () => {
  const fontModules = [
    import('@fontsource/plus-jakarta-sans/400.css'),
    import('@fontsource/plus-jakarta-sans/500.css'),
    import('@fontsource/plus-jakarta-sans/600.css'),
    import('@fontsource/plus-jakarta-sans/700.css'),
    import('@fontsource/plus-jakarta-sans/800.css')
  ];
  await Promise.all(fontModules);
};

// Chargement immédiat du site avec spinner
const LoadingSpinner = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(to bottom right, #dbeafe, #ffffff, #faf5ff)' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid #e5e7eb', borderTopColor: '#2563eb', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }}></div>
      <p style={{ fontFamily: 'Inter, sans-serif', color: '#6b7280', fontSize: '14px', margin: 0 }}>Chargement...</p>
    </div>
  </div>
);

// Préchargement des fontes en arrière-plan
loadFonts();

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingSpinner />}>
    <App />
  </Suspense>
);

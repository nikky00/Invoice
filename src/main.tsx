import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx';
import "@/styles/index.css";
import "@/styles/fonts.css";
import "@/styles/tw.css";
import { Toaster } from '@/components/ui/toaster';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

document.documentElement.style.margin = '0';
document.body.style.margin = '0';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  document.body.textContent = 'ERROR: #root not found';
}

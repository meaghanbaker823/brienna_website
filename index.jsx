import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scripts.js';
import './styles/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/brienna_website'>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

// Routes
import { Rutas } from './routes/rutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  </React.StrictMode>
);
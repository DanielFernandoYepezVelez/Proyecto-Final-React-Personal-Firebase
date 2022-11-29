import React from 'react';
import ReactDOM from 'react-dom/client';

import { Menu } from "./shared/Menu/Menu";
import { Home } from './Components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Home/>
  </React.StrictMode>
);
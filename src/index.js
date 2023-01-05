import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import GlobalStyled from './GlobalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>
);


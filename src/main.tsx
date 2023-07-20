import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <div>About</div>
      },
      {
        path: '/contact',
        element: <div>Contact</div>
      },
      {
        path: '/products',
        element: <div>Products</div>
      },
      {
        path: '/shop',
        element: <div>Shop</div>
      }
    ]
  },
  {
    path: '/login',
    element: <div>Login</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);
